import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { LivroService } from 'src/app/core/service/livro.service';
import { ModalService } from 'src/app/core/service/modal.service';
import { Livro, SecaoBloco, SecaoLivro } from 'src/app/core/models/livro';

type TablePayload = {
  columns: string[];
  rows: string[][];
};

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    SelectModule
  ]
})
export class LivroComponent implements OnInit {
  private readonly livroService = inject(LivroService);
  private readonly authService = inject(AuthenticationService);
  private readonly modalService = inject(ModalService);
  private readonly fb = inject(FormBuilder);

  public readonly livros = signal<Livro[]>([]);
  public readonly livroSelecionadoId = signal<number | null>(null);
  public readonly secaoSelecionadaId = signal<number | null>(null);
  public readonly carregando = signal(false);
  public readonly salvando = signal(false);

  public readonly showLivroDialog = signal(false);
  public readonly showSecaoDialog = signal(false);
  public readonly showBlocoDialog = signal(false);

  public readonly editandoLivroId = signal<number | null>(null);
  public readonly editandoSecaoId = signal<number | null>(null);
  public readonly editandoBlocoId = signal<number | null>(null);

  public readonly isAdmin = computed(() => this.authService.hasRole('ADMIN'));
  public readonly livroSelecionado = computed(() =>
    this.livros().find(livro => livro.id === this.livroSelecionadoId()) ?? null
  );
  public readonly secoes = computed(() => this.livroSelecionado()?.secoes ?? []);
  public readonly secaoSelecionada = computed(() =>
    this.secoes().find(secao => secao.id === this.secaoSelecionadaId()) ?? this.secoes()[0] ?? null
  );

  public readonly livroForm = this.fb.group({
    titulo: ['', Validators.required],
    descricao: ['']
  });

  public readonly secaoForm = this.fb.group({
    titulo: ['', Validators.required],
    ordem: [1, Validators.required]
  });

  public readonly blocoForm = this.fb.group({
    tipo: ['TEXTO', Validators.required],
    titulo: [''],
    conteudo: [''],
    payloadJson: [''],
    ordem: [1, Validators.required]
  });

  public readonly tiposBloco = [
    { label: 'Título', value: 'TITULO' },
    { label: 'Subtítulo', value: 'SUBTITULO' },
    { label: 'Texto', value: 'TEXTO' },
    { label: 'Lista', value: 'LISTA' },
    { label: 'Tabela', value: 'TABELA' },
    { label: 'Divisor', value: 'DIVISOR' }
  ];

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros() {
    this.carregando.set(true);
    this.livroService.listarLivros().subscribe({
      next: livros => {
        this.livros.set(livros);

        const livroAtual = this.livroSelecionadoId();
        const secaoAtual = this.secaoSelecionadaId();
        const livroSelecionado = livros.find(livro => livro.id === livroAtual) ?? livros[0] ?? null;

        this.livroSelecionadoId.set(livroSelecionado?.id ?? null);
        const secaoSelecionada = livroSelecionado?.secoes.find(secao => secao.id === secaoAtual) ?? livroSelecionado?.secoes[0] ?? null;
        this.secaoSelecionadaId.set(secaoSelecionada?.id ?? null);
        this.carregando.set(false);
      },
      error: () => {
        this.carregando.set(false);
        this.modalService.openModalError('Não foi possível carregar o livro.');
      }
    });
  }

  selecionarLivro(livro: Livro) {
    this.livroSelecionadoId.set(livro.id);
    this.secaoSelecionadaId.set(livro.secoes[0]?.id ?? null);
  }

  selecionarSecao(secao: SecaoLivro) {
    this.secaoSelecionadaId.set(secao.id);
  }

  abrirCriacaoLivro() {
    this.editandoLivroId.set(null);
    this.livroForm.reset({
      titulo: '',
      descricao: ''
    });
    this.showLivroDialog.set(true);
  }

  abrirEdicaoLivro() {
    const livro = this.livroSelecionado();
    if (!livro) {
      return;
    }

    this.editandoLivroId.set(livro.id);
    this.livroForm.reset({
      titulo: livro.titulo,
      descricao: livro.descricao
    });
    this.showLivroDialog.set(true);
  }

  salvarLivro() {
    if (this.livroForm.invalid) {
      this.livroForm.markAllAsTouched();
      return;
    }

    this.salvando.set(true);
    const raw = this.livroForm.getRawValue();
    const payload = {
      titulo: raw.titulo ?? '',
      descricao: raw.descricao ?? ''
    };
    const request$ = this.editandoLivroId()
      ? this.livroService.atualizarLivro(this.editandoLivroId()!, payload)
      : this.livroService.criarLivro(payload);

    request$.subscribe({
      next: livro => {
        this.salvando.set(false);
        this.showLivroDialog.set(false);
        this.modalService.openModalSuccess(this.editandoLivroId() ? 'Livro atualizado.' : 'Livro criado.');
        this.carregarLivros();
        this.livroSelecionadoId.set(livro.id);
      },
      error: () => {
        this.salvando.set(false);
        this.modalService.openModalError('Não foi possível salvar o livro.');
      }
    });
  }

  abrirCriacaoSecao() {
    const livro = this.livroSelecionado();
    if (!livro) {
      return;
    }

    this.editandoSecaoId.set(null);
    this.secaoForm.reset({
      titulo: '',
      ordem: (livro.secoes.at(-1)?.ordem ?? 0) + 1
    });
    this.showSecaoDialog.set(true);
  }

  abrirEdicaoSecao(secao: SecaoLivro) {
    this.editandoSecaoId.set(secao.id);
    this.secaoForm.reset({
      titulo: secao.titulo,
      ordem: secao.ordem
    });
    this.showSecaoDialog.set(true);
  }

  salvarSecao() {
    const livro = this.livroSelecionado();
    if (!livro || this.secaoForm.invalid) {
      this.secaoForm.markAllAsTouched();
      return;
    }

    this.salvando.set(true);
    const raw = this.secaoForm.getRawValue();
    const payload = {
      titulo: raw.titulo ?? '',
      ordem: raw.ordem ?? 1
    };
    const request$ = this.editandoSecaoId()
      ? this.livroService.atualizarSecao(livro.id, this.editandoSecaoId()!, payload)
      : this.livroService.criarSecao(livro.id, payload);

    request$.subscribe({
      next: secao => {
        this.salvando.set(false);
        this.showSecaoDialog.set(false);
        this.modalService.openModalSuccess(this.editandoSecaoId() ? 'Seção atualizada.' : 'Seção criada.');
        this.carregarLivros();
        this.secaoSelecionadaId.set(secao.id);
      },
      error: () => {
        this.salvando.set(false);
        this.modalService.openModalError('Não foi possível salvar a seção.');
      }
    });
  }

  removerSecao(secao: SecaoLivro) {
    const livro = this.livroSelecionado();
    if (!livro) {
      return;
    }

    this.livroService.removerSecao(livro.id, secao.id).subscribe({
      next: () => {
        this.modalService.openModalSuccess('Seção removida.');
        this.carregarLivros();
      },
      error: () => this.modalService.openModalError('Não foi possível remover a seção.')
    });
  }

  abrirCriacaoBloco() {
    const secao = this.secaoSelecionada();
    if (!secao) {
      return;
    }

    this.editandoBlocoId.set(null);
    this.blocoForm.reset({
      tipo: 'TEXTO',
      titulo: '',
      conteudo: '',
      payloadJson: '',
      ordem: (secao.blocos.at(-1)?.ordem ?? 0) + 1
    });
    this.showBlocoDialog.set(true);
  }

  abrirEdicaoBloco(bloco: SecaoBloco) {
    this.editandoBlocoId.set(bloco.id);
    this.blocoForm.reset({
      tipo: bloco.tipo,
      titulo: bloco.titulo,
      conteudo: bloco.conteudo,
      payloadJson: bloco.payloadJson,
      ordem: bloco.ordem
    });
    this.showBlocoDialog.set(true);
  }

  salvarBloco() {
    const secao = this.secaoSelecionada();
    if (!secao || this.blocoForm.invalid) {
      this.blocoForm.markAllAsTouched();
      return;
    }

    this.salvando.set(true);
    const raw = this.blocoForm.getRawValue();
    const payload = {
      tipo: raw.tipo ?? 'TEXTO',
      titulo: raw.titulo ?? '',
      conteudo: raw.conteudo ?? '',
      payloadJson: raw.payloadJson ?? '',
      ordem: raw.ordem ?? 1
    };
    const request$ = this.editandoBlocoId()
      ? this.livroService.atualizarBloco(secao.id, this.editandoBlocoId()!, payload)
      : this.livroService.criarBloco(secao.id, payload);

    request$.subscribe({
      next: () => {
        this.salvando.set(false);
        this.showBlocoDialog.set(false);
        this.modalService.openModalSuccess(this.editandoBlocoId() ? 'Bloco atualizado.' : 'Bloco criado.');
        this.carregarLivros();
      },
      error: () => {
        this.salvando.set(false);
        this.modalService.openModalError('Não foi possível salvar o bloco.');
      }
    });
  }

  removerBloco(bloco: SecaoBloco) {
    const secao = this.secaoSelecionada();
    if (!secao) {
      return;
    }

    this.livroService.removerBloco(secao.id, bloco.id).subscribe({
      next: () => {
        this.modalService.openModalSuccess('Bloco removido.');
        this.carregarLivros();
      },
      error: () => this.modalService.openModalError('Não foi possível remover o bloco.')
    });
  }

  parseLista(bloco: SecaoBloco): string[] {
    if (!bloco.payloadJson) {
      return bloco.conteudo?.split('\n').map(item => item.trim()).filter(Boolean) ?? [];
    }

    try {
      const payload = JSON.parse(bloco.payloadJson);
      if (Array.isArray(payload)) {
        return payload.map(item => String(item));
      }
      if (Array.isArray(payload?.items)) {
        return payload.items.map((item: unknown) => String(item));
      }
    } catch {
      return bloco.conteudo?.split('\n').map(item => item.trim()).filter(Boolean) ?? [];
    }

    return [];
  }

  parseTabela(bloco: SecaoBloco): TablePayload | null {
    if (!bloco.payloadJson) {
      return null;
    }

    try {
      const payload = JSON.parse(bloco.payloadJson);
      if (Array.isArray(payload?.columns) && Array.isArray(payload?.rows)) {
        return {
          columns: payload.columns.map((column: unknown) => String(column)),
          rows: payload.rows.map((row: unknown) =>
            Array.isArray(row) ? row.map(cell => String(cell)) : []
          )
        };
      }
    } catch {
      return null;
    }

    return null;
  }
}
