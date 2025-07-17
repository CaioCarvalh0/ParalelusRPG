import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEnum } from '../enums/modal';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  dialog = inject(MatDialog);

  constructor() {
  }

  private openModal(msg: String, tipo: ModalEnum) {
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
      disableClose: false
    }
    this.dialog.open(ModalComponent, config)
  }

  openModalAlert(mensagem: String) {
    this.openModal(mensagem, ModalEnum.ALERTA);
  }

  openModalSuccess(mensagem: String) {
    this.openModal(mensagem, ModalEnum.SUCESSO);
  }

  openModalConfirm(mensagem: String) {
    this.openModal(mensagem, ModalEnum.CONFIRMACAO);
  }

  openModalError(mensagem: String) {
    this.openModal(mensagem, ModalEnum.ERRO);
  }

  emBreve(mensagem: String = 'Em breve disponível!') {
    this.openModalAlert(mensagem);
  }

}