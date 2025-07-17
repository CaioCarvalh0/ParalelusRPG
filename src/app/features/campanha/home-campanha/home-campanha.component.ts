import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CriacaoCampanhaComponent } from '../criacao-campanha/criacao-campanha.component';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
import { CardCampanhaComponent } from 'src/app/shared/cards/card-campanha/card-campanha.component';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { ModalService } from 'src/app/core/service/modal.service';
import { Personagem } from 'src/app/core/models/personagem';
import { Campanha } from 'src/app/core/models/campanha';

@Component({
  selector: 'app-home-campanha',
  imports: [
    ButtonModule,
    CardCampanhaComponent,
    CommonModule,
    TooltipModule
  ],
  templateUrl: './home-campanha.component.html',
  styleUrl: './home-campanha.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCampanhaComponent implements OnInit {
  private readonly capanhaService = inject(CampanhaService)
  private readonly modal = inject(ModalService)
  private readonly dialog = inject(MatDialog)
  private readonly route = inject(Router)

  public readonly jogadoresPreenchidos = computed(() => {
    const jogadores = this.campanhaSelecionada()?.jogadores ?? [];
    const preenchidos = [...jogadores];
    while (preenchidos.length < 10) {
      preenchidos.push(new Personagem());
    }
    return preenchidos;
  });
  public readonly campanhas = signal<Campanha[]>([])
  public readonly campanhaSelecionada = signal<Campanha | null>(null)

  constructor() {

  }

  ngOnInit(): void {
    this.buscarCampanhas()
  }

  buscarCampanhas() {
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
    const config = new MatDialogConfig();
    config.width = '60%';
    config.height = '60%';
    config.disableClose = true;
    this.dialog.open(CriacaoCampanhaComponent, config)
  }

  entrarEmCampanha(campanha: Campanha) {
    this.route.navigate(['/campanha', campanha.id])
  }
}
