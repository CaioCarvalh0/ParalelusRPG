import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardPersonagemComponent } from 'src/app/cards/card-personagem/card-personagem.component';
import { Personagem } from 'src/app/models/personagem';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PersonagemService } from 'src/app/service/personagem.service';

@Component({
  selector: 'app-personagens',
  imports: [
    CardPersonagemComponent
  ],
  templateUrl: './personagens.component.html',
  styleUrl: './personagens.component.scss'
})
export class PersonagensComponent implements OnInit {

  listaPersonagens: Personagem[] = [];

  persoangemService = inject(PersonagemService);
  authService = inject(AuthenticationService);
  router = inject(Router);

  constructor() {
  }

  ngOnInit(): void {
    this.buscarListaPersonagens()
  }


  buscarListaPersonagens(){
    this.persoangemService.getPersonagemOfUsuario(this.authService.currentUser.id).subscribe(result => {
      this.listaPersonagens = result ?? [];
    })
  }

  novoPersonagem() {
    this.persoangemService.resetPersonagem();
    this.router.navigate(['/personagens/ficha']);
  }

  editarPersonagem(personagem: Personagem) {
    this.persoangemService.setPersonagem(personagem);
    this.router.navigate(['/personagens/ficha']);
  }
}
