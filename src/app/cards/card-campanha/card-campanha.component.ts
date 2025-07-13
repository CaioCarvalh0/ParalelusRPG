import { Component, input, OnInit, output } from '@angular/core';
import { Campanha } from 'src/app/models/campanha';

@Component({
    selector: 'app-card-campanha',
    templateUrl: './card-campanha.component.html',
    styleUrls: ['./card-campanha.component.scss'],
    standalone: true,
    imports: [],
})
export class CardCampanhaComponent implements OnInit {

    campanha = input<Campanha>();
    selecionar = output<Campanha>();

    constructor() {

    }

    ngOnInit() {
    }

    onSelecionar() {
        this.selecionar.emit(this.campanha() || new Campanha());
    }

    getImagem() {
        if (!this.campanha()?.capa) {
            return 'assets/imagens/personagem.png';
        }
        return `data:image/png;base64,${this.campanha()?.capa}`;
    }
}
