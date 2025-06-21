import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Campanha } from 'src/app/models/campanha';
import { CampanhaService } from 'src/app/service/campanha.service';
import { ModalService } from 'src/app/service/modal.service';
import { ButtonModule } from 'primeng/button';
import { CardCampanhaComponent } from 'src/app/cards/card-campanha/card-campanha.component';
import { MatDialog } from '@angular/material/dialog';
import { CriacaoCampanhaComponent } from '../criacao-campanha/criacao-campanha.component';

@Component({
  selector: 'app-home-campanha',
  imports: [ButtonModule, CardCampanhaComponent],
  templateUrl: './home-campanha.component.html',
  styleUrl: './home-campanha.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCampanhaComponent implements OnInit {
  campanhas = signal<Campanha[]>([])

  private capanhaService = inject(CampanhaService)
  private modal = inject(ModalService)
  private dialog = inject(MatDialog)
  constructor() {

  }

  ngOnInit(): void {
    this.capanhaService.getListaCampanhasAtivas().subscribe({
      next: (result) => {
        this.campanhas.set(result);
      },
      error: (error) => {
        this.modal.openModalError(error)
      } 
    });
  }

  criarCampanha() {
    this.dialog.open(CriacaoCampanhaComponent)
  }

}
