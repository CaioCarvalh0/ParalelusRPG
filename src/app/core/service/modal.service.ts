import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalEnum } from '../enums/modal';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private readonly dialog = inject(MatDialog);
  private readonly notifications: MatDialogRef<ModalComponent>[] = [];
  private readonly baseTop = 24;
  private readonly gap = 12;
  private readonly notificationHeight = 96;

  private openModal(msg: String, tipo: ModalEnum, durationMs: number = 4200) {
    const top = `${this.baseTop + (this.notifications.length * (this.notificationHeight + this.gap))}px`;

    const ref = this.dialog.open(ModalComponent, {
      width: 'calc(100vw - 2rem)',
      maxWidth: '380px',
      minWidth: '280px',
      height: 'auto',
      maxHeight: '90vh',
      position: {
        top,
        right: '16px'
      },
      data: {
        tipo,
        mensagem: msg,
        durationMs
      },
      disableClose: false,
      hasBackdrop: false,
      autoFocus: false,
      restoreFocus: false,
      panelClass: 'notification-dialog-panel'
    });

    this.notifications.push(ref);

    ref.afterClosed().subscribe(() => {
      this.removeNotification(ref);
    });
  }

  openModalAlert(mensagem: String) {
    this.openModal(mensagem, ModalEnum.ALERTA);
  }

  openModalSuccess(mensagem: String) {
    this.openModal(mensagem, ModalEnum.SUCESSO);
  }

  openModalConfirm(mensagem: String) {
    this.openModal(mensagem, ModalEnum.CONFIRMACAO, 5200);
  }

  openModalError(mensagem: String) {
    this.openModal(mensagem, ModalEnum.ERRO, 5200);
  }

  emBreve(mensagem: String = 'Em breve disponível!') {
    this.openModalAlert(mensagem);
  }

  private removeNotification(ref: MatDialogRef<ModalComponent>) {
    const index = this.notifications.indexOf(ref);
    if (index === -1) {
      return;
    }

    this.notifications.splice(index, 1);
    this.repositionNotifications();
  }

  private repositionNotifications() {
    this.notifications.forEach((ref, index) => {
      ref.updatePosition({
        top: `${this.baseTop + (index * (this.notificationHeight + this.gap))}px`,
        right: '16px'
      });
    });
  }
}
