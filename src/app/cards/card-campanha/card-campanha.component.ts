import { Component, Input, OnInit } from '@angular/core';
import { Campanha } from 'src/app/models/campanha';

@Component({
    selector: 'app-card-campanha',
    templateUrl: './card-campanha.component.html',
    styleUrls: ['./card-campanha.component.scss'],
    standalone: true,
    imports: [ 
    ]
})
export class CardCampanhaComponent implements OnInit {

    @Input() campanha: Campanha = new Campanha();
    constructor() { 

    }

    ngOnInit(){
        console.log(this.campanha);
    }
    
}
