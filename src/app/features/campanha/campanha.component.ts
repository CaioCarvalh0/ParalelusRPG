import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { SolicitacaoComponent } from 'src/app/shared/solicitacao/solicitacao.component';

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule
  ]
})
export class CampanhaComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly campanhaService = inject(CampanhaService)
  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('ID da campanha:', id);
    });
  }

  btnSolicitacao() {
    this.dialog.open(SolicitacaoComponent);
  }
}
