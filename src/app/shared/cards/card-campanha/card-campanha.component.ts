import { Component, input, OnInit, output } from '@angular/core';
import { Campanha } from 'src/app/core/models/campanha';
import { environment } from 'src/environments/environment';

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

    getImagem(): string {
        if (this.campanha()?.capa) {
            return `${environment.apiUrl}${this.campanha()?.capa}`;
        }
        return 'assets/images/placeholder-campanha.png';
    }
}
