import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SolicitacaoComponent } from '../shared/solicitacao/solicitacao.component';
import { CardPersonagemComponent } from '../cards/card-personagem/card-personagem.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-campanha',
    templateUrl: './campanha.component.html',
    styleUrls: ['./campanha.component.scss'],
    standalone: true,
    imports: [
      CardPersonagemComponent,
      MatIconModule,
      MatDialogModule,
    ]
})
export class CampanhaComponent implements OnInit{

  constructor(private dialog: MatDialog){

  }

  ngOnInit(): void {
  }

  btnSolicitacao(){
    this.dialog.open(SolicitacaoComponent);
  }
}
