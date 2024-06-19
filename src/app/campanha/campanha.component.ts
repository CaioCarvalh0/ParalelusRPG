import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SolicitacaoComponent } from '../shared/solicitacao/solicitacao.component';

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.scss']
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
