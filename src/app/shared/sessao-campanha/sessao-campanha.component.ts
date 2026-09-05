import { CommonModule } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

export interface SessaoCampanhaDialogData {
  campanhaNome: string;
  sessaoAtiva: boolean;
  titulo?: string;
  estadoMesa?: string;
}

export interface SessaoCampanhaDialogResult {
  acao: 'iniciar' | 'salvar' | 'finalizar';
  titulo: string;
  estadoMesa: string;
}

@Component({
  selector: 'app-sessao-campanha',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './sessao-campanha.component.html',
  styleUrls: ['./sessao-campanha.component.scss']
})
export class SessaoCampanhaComponent {
  public readonly titulo = signal(this.data.titulo ?? '');
  public readonly estadoMesa = signal(this.data.estadoMesa ?? '');

  constructor(
    public dialogRef: MatDialogRef<SessaoCampanhaComponent, SessaoCampanhaDialogResult | null>,
    @Inject(MAT_DIALOG_DATA) public data: SessaoCampanhaDialogData
  ) {}

  public fechar() {
    this.dialogRef.close(null);
  }

  public iniciar() {
    this.dialogRef.close({
      acao: 'iniciar',
      titulo: this.titulo().trim(),
      estadoMesa: this.estadoMesa().trim()
    });
  }

  public salvar() {
    this.dialogRef.close({
      acao: 'salvar',
      titulo: this.titulo().trim(),
      estadoMesa: this.estadoMesa().trim()
    });
  }

  public finalizar() {
    this.dialogRef.close({
      acao: 'finalizar',
      titulo: this.titulo().trim(),
      estadoMesa: this.estadoMesa().trim()
    });
  }
}
