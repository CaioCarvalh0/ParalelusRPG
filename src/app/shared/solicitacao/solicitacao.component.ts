import { CommonModule } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { CampanhaSolicitacao } from 'src/app/core/models/campanha';

export interface SolicitacaoDialogOption {
  label: string;
  value: number;
}

export interface SolicitacaoDialogData {
  modo: 'criar' | 'gerenciar';
  campanhaNome: string;
  personagemOptions?: SolicitacaoDialogOption[];
  solicitacoes?: CampanhaSolicitacao[];
}

export interface SolicitacaoDialogResult {
  acao: 'enviar' | 'aprovar' | 'recusar';
  personagemId?: number | null;
  mensagem?: string;
  solicitacaoId?: number;
}

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ]
})
export class SolicitacaoComponent {
  public readonly personagemId = signal<number | null>(this.data.personagemOptions?.[0]?.value ?? null);
  public readonly mensagem = signal('');

  constructor(
    public dialogRef: MatDialogRef<SolicitacaoComponent, SolicitacaoDialogResult | null>,
    @Inject(MAT_DIALOG_DATA) public data: SolicitacaoDialogData
  ) {}

  public isPendente(status: string) {
    return status === 'PENDENTE';
  }

  public fechar() {
    this.dialogRef.close(null);
  }

  public enviar() {
    this.dialogRef.close({
      acao: 'enviar',
      personagemId: this.personagemId(),
      mensagem: this.mensagem().trim()
    });
  }

  public aprovar(solicitacaoId: number) {
    this.dialogRef.close({
      acao: 'aprovar',
      solicitacaoId
    });
  }

  public recusar(solicitacaoId: number) {
    this.dialogRef.close({
      acao: 'recusar',
      solicitacaoId
    });
  }
}
