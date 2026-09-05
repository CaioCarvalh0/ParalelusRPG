import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { CampanhaWebsocketService } from 'src/app/core/service/campanha-websocket.service';
import { Campanha, CampanhaSessao, CampanhaSolicitacao } from 'src/app/core/models/campanha';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { PersonagemService } from 'src/app/core/service/personagem.service';
import { ModalService } from 'src/app/core/service/modal.service';
import { Personagem } from 'src/app/core/models/personagem';
import { CardPersonagemComponent } from 'src/app/shared/cards/card-personagem/card-personagem.component';
import { CampanhaRealtimeEventDTO, CampanhaTimelineEventoDTO } from 'src/app/core/models/dtos/campanha-dto';
import {
  SolicitacaoComponent,
  SolicitacaoDialogResult
} from 'src/app/shared/solicitacao/solicitacao.component';
import {
  SessaoCampanhaComponent,
  SessaoCampanhaDialogResult
} from 'src/app/shared/sessao-campanha/sessao-campanha.component';
import { Subscription } from 'rxjs';

interface SelectOption {
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardPersonagemComponent,
    DividerModule,
    FormsModule,
    InputTextModule,
    SelectModule,
    TimelineModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampanhaComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly campanhaService = inject(CampanhaService);
  private readonly authService = inject(AuthenticationService);
  private readonly personagemService = inject(PersonagemService);
  private readonly modal = inject(ModalService);
  private readonly dialog = inject(MatDialog);
  private readonly campanhaWebsocketService = inject(CampanhaWebsocketService);
  private realtimeSubscription: Subscription | null = null;

  public readonly campanha = signal<Campanha | null>(null);
  public readonly sessaoAtiva = signal<CampanhaSessao | null>(null);
  public readonly solicitacoes = signal<CampanhaSolicitacao[]>([]);
  public readonly timeline = signal<CampanhaTimelineEventoDTO[]>([]);
  public readonly personagensDoUsuario = signal<Personagem[]>([]);

  public readonly personagemSolicitacaoId = signal<number | null>(null);
  public readonly personagemTimelineId = signal<number | null>(null);
  public readonly tituloSessao = signal('');
  public readonly estadoMesa = signal('');
  public readonly dadoSelecionado = signal('d20');
  public readonly quantidadeDados = signal(1);

  public readonly carregando = signal(false);
  public readonly salvando = signal(false);
  public readonly carregandoSolicitacoes = signal(false);

  public readonly currentUserId = computed(() => this.authService.currentUser()?.id ?? 0);
  public readonly isMestre = computed(() => this.campanha()?.mestre?.id === this.currentUserId());
  public readonly isParticipante = computed(() =>
    (this.campanha()?.jogadores ?? []).some((jogador) => jogador.id === this.currentUserId())
  );
  public readonly podeInteragirTimeline = computed(() => this.isMestre() || this.isParticipante());

  public readonly personagensDisponiveisSolicitacao = computed(() => {
    const personagensCampanhaIds = new Set((this.campanha()?.personagens ?? []).map((personagem) => personagem.id));
    return this.personagensDoUsuario().filter((personagem) => !personagensCampanhaIds.has(personagem.id));
  });

  public readonly personagensParticipandoDoUsuario = computed(() =>
    (this.campanha()?.personagens ?? []).filter((personagem) => personagem.usuario?.id === this.currentUserId())
  );

  public readonly opcoesPersonagemSolicitacao = computed<SelectOption[]>(() =>
    this.personagensDisponiveisSolicitacao().map((personagem) => ({
      label: personagem.nome,
      value: personagem.id
    }))
  );

  public readonly opcoesPersonagemTimeline = computed<SelectOption[]>(() =>
    this.personagensParticipandoDoUsuario().map((personagem) => ({
      label: personagem.nome,
      value: personagem.id
    }))
  );

  public readonly opcoesQuantidadeDados: SelectOption[] = [
    { label: '1 dado', value: 1 },
    { label: '2 dados', value: 2 },
    { label: '3 dados', value: 3 },
    { label: '4 dados', value: 4 },
    { label: '5 dados', value: 5 }
  ];

  public readonly opcoesDados: SelectOption[] = [
    { label: 'd4', value: 'd4' },
    { label: 'd6', value: 'd6' },
    { label: 'd8', value: 'd8' },
    { label: 'd10', value: 'd10' },
    { label: 'd12', value: 'd12' },
    { label: 'd20', value: 'd20' },
    { label: 'd100', value: 'd100' }
  ];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/campanha/home']);
      return;
    }

    this.buscarPersonagensDoUsuario();
    this.recarregarCampanha(id);
    this.conectarRealtime(id);
  }

  ngOnDestroy(): void {
    this.realtimeSubscription?.unsubscribe();
    this.campanhaWebsocketService.disconnect();
  }

  public voltarParaCampanhas() {
    this.router.navigate(['/campanha/home']);
  }

  public abrirSolicitacao() {
    const campanha = this.campanha();
    if (!campanha) {
      return;
    }

    if (this.opcoesPersonagemSolicitacao().length === 0) {
      this.modal.openModalError('Voce nao possui personagem disponivel para solicitar entrada.');
      return;
    }

    const dialogRef = this.dialog.open(SolicitacaoComponent, {
      width: 'min(42rem, calc(100vw - 2rem))',
      maxWidth: '42rem',
      panelClass: 'solicitacao-dialog-panel',
      data: {
        modo: 'criar',
        campanhaNome: campanha.nome,
        personagemOptions: this.opcoesPersonagemSolicitacao()
      }
    });

    dialogRef.afterClosed().subscribe((result: SolicitacaoDialogResult | null) => {
      if (!result || result.acao !== 'enviar' || !result.personagemId) {
        return;
      }

      this.enviarSolicitacao(result.personagemId, result.mensagem ?? '');
    });
  }

  public abrirSolicitacoes() {
    const campanha = this.campanha();
    if (!campanha) {
      return;
    }

    this.carregandoSolicitacoes.set(true);
    this.campanhaService.listarSolicitacoes(campanha.id).subscribe({
      next: (solicitacoes) => {
        this.carregandoSolicitacoes.set(false);
        this.solicitacoes.set(solicitacoes);

        const dialogRef = this.dialog.open(SolicitacaoComponent, {
          width: 'min(44rem, calc(100vw - 2rem))',
          maxWidth: '44rem',
          panelClass: 'solicitacao-dialog-panel',
          data: {
            modo: 'gerenciar',
            campanhaNome: campanha.nome,
            solicitacoes
          }
        });

        dialogRef.afterClosed().subscribe((result: SolicitacaoDialogResult | null) => {
          if (!result?.solicitacaoId) {
            return;
          }

          if (result.acao === 'aprovar') {
            this.aprovarSolicitacao(result.solicitacaoId);
            return;
          }

          if (result.acao === 'recusar') {
            this.recusarSolicitacao(result.solicitacaoId);
          }
        });
      },
      error: () => {
        this.carregandoSolicitacoes.set(false);
        this.modal.openModalError('Nao foi possivel carregar as solicitacoes.');
      }
    });
  }

  public abrirControleSessao() {
    const campanha = this.campanha();
    if (!campanha || !this.isMestre()) {
      return;
    }

    const dialogRef = this.dialog.open(SessaoCampanhaComponent, {
      width: 'min(42rem, calc(100vw - 2rem))',
      maxWidth: '42rem',
      panelClass: 'solicitacao-dialog-panel',
      data: {
        campanhaNome: campanha.nome,
        sessaoAtiva: !!this.sessaoAtiva(),
        titulo: this.sessaoAtiva()?.titulo ?? '',
        estadoMesa: this.estadoMesa()
      }
    });

    dialogRef.afterClosed().subscribe((result: SessaoCampanhaDialogResult | null) => {
      if (!result) {
        return;
      }

      this.tituloSessao.set(result.titulo);
      this.estadoMesa.set(result.estadoMesa);

      if (result.acao === 'iniciar') {
        this.iniciarSessao();
        return;
      }

      if (result.acao === 'salvar') {
        this.salvarEstadoMesa();
        return;
      }

      if (result.acao === 'finalizar') {
        this.finalizarSessao();
      }
    });
  }

  public sairDaCampanha() {
    const campanha = this.campanha();
    if (!campanha) {
      return;
    }

    this.salvando.set(true);
    this.campanhaService.sairDaCampanha(campanha.id).subscribe({
      next: (campanhaAtualizada) => {
        this.salvando.set(false);
        this.hidratarCampanha(campanhaAtualizada);
        this.modal.openModalSuccess('Voce saiu da campanha.');
      },
      error: (error) => {
        this.salvando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel sair da campanha.'));
      }
    });
  }

  public aprovarSolicitacao(solicitacaoId: number) {
    const campanha = this.campanha();
    if (!campanha) {
      return;
    }

    this.salvando.set(true);
    this.campanhaService.aprovarSolicitacao(campanha.id, solicitacaoId).subscribe({
      next: () => {
        this.salvando.set(false);
        this.modal.openModalSuccess('Solicitacao aprovada.');
        this.recarregarCampanha(campanha.id);
      },
      error: (error) => {
        this.salvando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel aprovar a solicitacao.'));
      }
    });
  }

  public recusarSolicitacao(solicitacaoId: number) {
    const campanha = this.campanha();
    if (!campanha) {
      return;
    }

    this.salvando.set(true);
    this.campanhaService.recusarSolicitacao(campanha.id, solicitacaoId).subscribe({
      next: () => {
        this.salvando.set(false);
        this.modal.openModalSuccess('Solicitacao recusada.');
        this.recarregarCampanha(campanha.id);
      },
      error: (error) => {
        this.salvando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel recusar a solicitacao.'));
      }
    });
  }

  public iniciarSessao() {
    const campanha = this.campanha();
    const titulo = this.tituloSessao().trim();

    if (!campanha) {
      return;
    }

    if (!titulo) {
      this.modal.openModalError('Informe um titulo para iniciar a sessao.');
      return;
    }

    this.salvando.set(true);
    this.campanhaService.iniciarSessao(campanha.id, {
      titulo,
      estadoMesa: this.estadoMesa().trim()
    }).subscribe({
      next: (sessao) => {
        this.salvando.set(false);
        this.sessaoAtiva.set(sessao);
        this.timeline.set(sessao?.timeline ?? []);
        this.modal.openModalSuccess('Sessao iniciada.');
        this.recarregarCampanha(campanha.id);
      },
      error: (error) => {
        this.salvando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel iniciar a sessao.'));
      }
    });
  }

  public salvarEstadoMesa() {
    const campanha = this.campanha();
    if (!campanha || !this.sessaoAtiva()) {
      return;
    }

    this.salvando.set(true);
    this.campanhaService.atualizarEstadoMesa(campanha.id, {
      estadoMesa: this.estadoMesa().trim()
    }).subscribe({
      next: (sessao) => {
        this.salvando.set(false);
        this.sessaoAtiva.set(sessao);
        this.estadoMesa.set(sessao?.estadoMesa ?? '');
        this.modal.openModalSuccess('Estado da mesa atualizado.');
        this.recarregarCampanha(campanha.id);
      },
      error: (error) => {
        this.salvando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel atualizar o estado da mesa.'));
      }
    });
  }

  public finalizarSessao() {
    const campanha = this.campanha();
    if (!campanha || !this.sessaoAtiva()) {
      return;
    }

    this.salvando.set(true);
    this.campanhaService.finalizarSessao(campanha.id).subscribe({
      next: () => {
        this.salvando.set(false);
        this.modal.openModalSuccess('Sessao finalizada.');
        this.recarregarCampanha(campanha.id);
      },
      error: (error) => {
        this.salvando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel finalizar a sessao.'));
      }
    });
  }

  public registrarRolagem() {
    const campanha = this.campanha();

    if (!campanha || !this.sessaoAtiva()) {
      this.modal.openModalAlert('Inicie uma sessao antes de registrar rolagens.');
      return;
    }

    const dado = this.dadoSelecionado();
    const quantidade = Number(this.quantidadeDados());
    const faces = Number(String(dado).replace('d', ''));
    const resultados = Array.from({ length: quantidade }, () => Math.floor(Math.random() * faces) + 1);
    const total = resultados.reduce((acumulado, valor) => acumulado + valor, 0);
    const conteudo = `${quantidade}x${dado} -> [${resultados.join(', ')}] = ${total}`;

    this.salvando.set(true);
    this.campanhaService.registrarEventoTimeline(campanha.id, {
      personagemId: this.personagemTimelineId(),
      tipo: 'ROLAGEM',
      conteudo
    }).subscribe({
      next: (evento) => {
        this.salvando.set(false);
        this.timeline.update((timelineAtual) => [...timelineAtual, evento]);
      },
      error: (error) => {
        this.salvando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel registrar a rolagem.'));
      }
    });
  }

  public getUsuarioCampanha(personagem: Personagem) {
    return this.campanha()?.jogadores.find((jogador) => jogador.id === personagem.usuario?.id);
  }

  public isTimelineEntryFromCurrentUser(entry: CampanhaTimelineEventoDTO) {
    return entry.usuario.id === this.currentUserId();
  }

  public getTimelineMarkerStyle(entry: CampanhaTimelineEventoDTO) {
    const palette = [
      ['#f38ba8', '#fab387'],
      ['#7dd3fc', '#38bdf8'],
      ['#86efac', '#4ade80'],
      ['#f9a8d4', '#ec4899'],
      ['#c4b5fd', '#8b5cf6'],
      ['#fde68a', '#f59e0b'],
      ['#93c5fd', '#3b82f6'],
      ['#fca5a5', '#ef4444']
    ];

    const userId = entry.usuario?.id ?? 0;
    const [start, end] = palette[Math.abs(userId) % palette.length];

    return {
      '--marker-start': start,
      '--marker-end': end,
      '--marker-ring': `${start}33`
    };
  }

  public formatarData(data?: string | null) {
    if (!data) {
      return 'Agora';
    }

    return new Date(data).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private recarregarCampanha(id: number) {
    this.carregando.set(true);
    this.campanhaService.getCampanhaById(id).subscribe({
      next: (campanha) => {
        this.carregando.set(false);
        this.hidratarCampanha(campanha);
      },
      error: (error) => {
        this.carregando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel carregar a campanha.'));
        this.router.navigate(['/campanha/home']);
      }
    });
  }

  private hidratarCampanha(campanha: Campanha) {
    this.campanha.set(campanha);
    this.sessaoAtiva.set(campanha.sessaoAtiva);
    this.tituloSessao.set(campanha.sessaoAtiva?.titulo ?? '');
    this.estadoMesa.set(campanha.sessaoAtiva?.estadoMesa ?? '');

    if (!this.personagemTimelineId() && this.personagensParticipandoDoUsuario().length > 0) {
      this.personagemTimelineId.set(this.personagensParticipandoDoUsuario()[0].id);
    }

    if (!this.personagemSolicitacaoId() && this.personagensDisponiveisSolicitacao().length > 0) {
      this.personagemSolicitacaoId.set(this.personagensDisponiveisSolicitacao()[0].id);
    }

    if (campanha.sessaoAtiva) {
      this.carregarTimeline(campanha.id);
    } else {
      this.timeline.set([]);
    }
  }

  private carregarTimeline(campanhaId: number) {
    this.campanhaService.listarTimeline(campanhaId).subscribe({
      next: (timeline) => this.timeline.set(timeline),
      error: () => this.timeline.set([])
    });
  }

  private conectarRealtime(campanhaId: number) {
    this.realtimeSubscription?.unsubscribe();
    this.realtimeSubscription = this.campanhaWebsocketService.connect(campanhaId).subscribe((event) => {
      this.aplicarEventoRealtime(event);
    });
  }

  private aplicarEventoRealtime(event: CampanhaRealtimeEventDTO) {
    const campanhaAtual = this.campanha();
    if (!campanhaAtual || event.campanhaId !== campanhaAtual.id) {
      return;
    }

    switch (event.type) {
      case 'TIMELINE_EVENTO_CRIADO':
        if (event.timelineEvento) {
          const timelineEvento = event.timelineEvento;
          this.timeline.update((timelineAtual) => {
            if (timelineAtual.some((item) => item.id === timelineEvento.id)) {
              return timelineAtual;
            }
            return [...timelineAtual, timelineEvento];
          });
        }
        break;
      case 'SOLICITACAO_ATUALIZADA':
      case 'SESSAO_INICIADA':
      case 'SESSAO_ATUALIZADA':
      case 'SESSAO_FINALIZADA':
        this.recarregarCampanha(campanhaAtual.id);
        break;
      default:
        break;
    }
  }

  private buscarPersonagensDoUsuario() {
    const usuario = this.authService.currentUser();
    if (!usuario?.id) {
      return;
    }

    this.personagemService.getPersonagemOfUsuario(usuario.id).subscribe({
      next: (personagens) => {
        this.personagensDoUsuario.set(personagens);

        if (!this.personagemSolicitacaoId() && personagens.length > 0) {
          this.personagemSolicitacaoId.set(personagens[0].id);
        }
      },
      error: () => this.modal.openModalError('Nao foi possivel carregar seus personagens.')
    });
  }

  private enviarSolicitacao(personagemId: number, mensagem: string) {
    const campanha = this.campanha();
    if (!campanha) {
      return;
    }

    this.salvando.set(true);
    this.campanhaService.criarSolicitacao(campanha.id, {
      personagemId,
      mensagem
    }).subscribe({
      next: () => {
        this.salvando.set(false);
        this.personagemSolicitacaoId.set(null);
        this.modal.openModalSuccess('Solicitacao enviada para o mestre.');
        this.recarregarCampanha(campanha.id);
      },
      error: (error) => {
        this.salvando.set(false);
        this.modal.openModalError(this.extrairMensagemErro(error, 'Nao foi possivel enviar a solicitacao.'));
      }
    });
  }

  private extrairMensagemErro(error: any, fallback: string) {
    return error?.error?.message || error?.error?.mensagem || fallback;
  }
}
