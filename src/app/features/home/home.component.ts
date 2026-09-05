import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Campanha } from 'src/app/core/models/campanha';
import { Personagem } from 'src/app/core/models/personagem';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { ModalService } from 'src/app/core/service/modal.service';
import { PersonagemService } from 'src/app/core/service/personagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ButtonModule]
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly campanhaService = inject(CampanhaService);
  private readonly personagemService = inject(PersonagemService);
  private readonly authService = inject(AuthenticationService);
  private readonly modal = inject(ModalService);

  public readonly listaCampanhas = signal<Campanha[]>([]);
  public readonly listaPersonagens = signal<Personagem[]>([]);

  public readonly totalCampanhas = computed(() => this.listaCampanhas().length);
  public readonly totalCampanhasAtivas = computed(() =>
    this.listaCampanhas().filter(campanha => campanha.ativa).length
  );
  public readonly totalCampanhasEncerradas = computed(() =>
    this.listaCampanhas().filter(campanha => !campanha.ativa).length
  );
  public readonly totalPersonagens = computed(() => this.listaPersonagens().length);
  public readonly nomeUsuarioAtual = computed(() => this.authService.currentUser()?.nome ?? 'Aventureiro');

  ngOnInit(): void {
    this.buscarCampanhas();
    this.buscarPersonagens();
  }

  buscarCampanhas() {
    this.campanhaService.getListaCampanhas().subscribe({
      next: campanhas => this.listaCampanhas.set(campanhas),
      error: () => this.listaCampanhas.set([])
    });
  }

  buscarPersonagens() {
    const usuarioId = this.authService.currentUser()?.id;

    if (!usuarioId) {
      this.listaPersonagens.set([]);
      return;
    }

    this.personagemService.getPersonagemOfUsuario(usuarioId).subscribe({
      next: personagens => this.listaPersonagens.set(personagens),
      error: () => this.listaPersonagens.set([])
    });
  }

  navigateCriarCampanha() {
    this.router.navigate(['/campanha/home']);
  }

  nagigatePersonagens() {
    this.router.navigate(['/personagens']);
  }

  navigateLivro() {
    this.router.navigate(['/livro']);
  }

  openModalEmBreve() {
    this.modal.emBreve();
  }
}
