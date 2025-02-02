import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalEnum } from '../enums/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  dialog = inject(MatDialog);

  constructor() {
  }

  private openModal(msg: string, tipo: ModalEnum) {
    const config = {
      width: '50vw',
      maxWidth: '400px', 
      minWidth: '200px', 
      height: 'auto',
      maxHeight: '90vh', 
      position: {
        top: '50px',
        left: '10px'
      },
      data: {
        tipo: tipo,
        mensagem: msg
      },
      disableClose: false //POR ENQUANTO
    }
    this.dialog.open(ModalComponent, config)
  }

  openModalAlert(mensagem: string) {
    this.openModal(mensagem, ModalEnum.ALERTA);
  }

  openModalSuccess(mensagem: string) {
    this.openModal(mensagem, ModalEnum.SUCESSO);
  }

  openModalConfirm(mensagem: string) {
    this.openModal(mensagem, ModalEnum.CONFIRMACAO);
  }

  openModalError(mensagem: string) {
    this.openModal(mensagem, ModalEnum.ERRO);
  }

}