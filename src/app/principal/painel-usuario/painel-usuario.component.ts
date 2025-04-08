import { Component } from '@angular/core';
import { CardCampanhaComponent } from 'src/app/cards/card-campanha/card-campanha.component';
import { CardPersonagemComponent } from 'src/app/cards/card-personagem/card-personagem.component';

@Component({
    selector: 'app-painel-usuario',
    templateUrl: './painel-usuario.component.html',
    styleUrls: ['./painel-usuario.component.scss'],
    standalone: true,
    imports: [
    CardCampanhaComponent
]
})
export class PainelUsuarioComponent {

}
