import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { RecSenhaComponent } from './rec-senha/rec-senha.component';
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    SolicitacaoComponent,
    RecSenhaComponent,
    TrocarSenhaComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
