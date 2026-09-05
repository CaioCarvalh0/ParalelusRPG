import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CriacaoCampanhaComponent } from '../criacao-campanha/criacao-campanha.component';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
import { CardCampanhaComponent } from 'src/app/shared/cards/card-campanha/card-campanha.component';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { ModalService } from 'src/app/core/service/modal.service';
import { Campanha } from 'src/app/core/models/campanha';
import { DialogService, DynamicDialogConfig, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DrawerModule } from 'primeng/drawer';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home-campanha',
  imports: [
    ButtonModule,
    CardCampanhaComponent,
    CommonModule,
    TooltipModule,
    DynamicDialogModule,
    DrawerModule,
    DividerModule,
    AvatarModule
  ],
  templateUrl: './home-campanha.component.html',
  styleUrl: './home-campanha.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCampanhaComponent implements OnInit {
  private readonly campanhaService = inject(CampanhaService);
  private readonly modal = inject(ModalService);
  private readonly dialog = inject(DialogService);
  private readonly route = inject(Router);

  public readonly campanhas = signal<Campanha[]>([]);
  public readonly campanhaSelecionada = signal<Campanha | null>(null);
  public readonly totalJogadores = computed(() =>
    this.campanhas().reduce((total, campanha) => total + (campanha.jogadores?.length ?? 0), 0)
  );
  public readonly campanhasComVagas = computed(() =>
    this.campanhas().filter(campanha => (campanha.jogadores?.length ?? 0) < 10).length
  );

  public readonly jogadoresPreenchidos = computed(() => {
    const jogadores = this.campanhaSelecionada()?.jogadores ?? [];
    return jogadores;
  });

  public readonly imagemSelecionada = computed(() => {
    const capa = this.campanhaSelecionada()?.capa;
    return capa ? `${environment.apiUrl}${capa}` : null;
  });

  constructor() {}

  ngOnInit(): void {
    this.buscarCampanhas();
  }

  public buscarCampanhas() {
    this.campanhaService.getListaCampanhasAtivas().subscribe({
      next: (result) => {
        this.campanhas.set(result);
      },
      error: (error) => {
        this.modal.openModalError(typeof error === 'string' ? error : 'Nao foi possivel carregar as campanhas');
      }
    });
  }

  public criarCampanha() {
    const config = new DynamicDialogConfig();
    config.width = '42rem';
    config.height = '90vh';
    config.modal = true;
    config.styleClass = 'campanha-create-dialog';
    config.contentStyle = { overflow: 'hidden', padding: '0' };
    const ref = this.dialog.open(CriacaoCampanhaComponent, config);
    ref.onClose.subscribe((campanhaCriada: Campanha | undefined) => {
      if (!campanhaCriada) {
        return;
      }
      this.buscarCampanhas();
      this.campanhaSelecionada.set(campanhaCriada);
    });
  }

  public entrarEmCampanha() {
    const campanha = this.campanhaSelecionada();
    if (campanha) {
      this.campanhaService.setCampanha(campanha);
      this.route.navigate(['/campanha/' + campanha.id]);
    } else {
      this.modal.openModalError('Selecione uma campanha para entrar.');
    }
  }
}
