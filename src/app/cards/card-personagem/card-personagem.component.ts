import { Component, Input } from '@angular/core';
import { Personagem } from 'src/app/models/personagem';

@Component({
    selector: 'app-card-personagem',
    templateUrl: './card-personagem.component.html',
    styleUrls: ['./card-personagem.component.scss'],
    standalone: true
})
export class CardPersonagemComponent {

    @Input({ required: true }) personagem!: Personagem;

    constructor() { 
        
    }

    getImagem(){
        if(!this.personagem.imagem) {
            return 'assets/imagens/personagem.png';
        }
        return `data:image/png;base64,${this.personagem.imagem}`;
    }

}
