import { Component, OnInit } from '@angular/core';
import { Campanha } from 'src/app/models/campanha';
import { CampanhaService } from 'src/app/service/campanha.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
    listaCampanhas: Campanha[] = [];
    listaCampanhasAtivas: Campanha[] = [];
    listaCampanhasInativas: Campanha[] = [];
    constructor(
        private campanhaService: CampanhaService
    ){

    }
    
    ngOnInit(): void {
        this.buscarCampanhas()
    }

    buscarCampanhas(){
        this.campanhaService.getListaCampanhas().subscribe(result => {
            this.listaCampanhas = result
            if(this.listaCampanhas.length > 0){
                this.getCampanhasAtivas()
                this.getCampanhasInativas()
            }
        })
    }

    getCampanhasAtivas(){
        this.listaCampanhasAtivas = this.listaCampanhas.filter(campanha => campanha.ativa == true)
        console.log('ativas',this.listaCampanhasAtivas)
    }

    getCampanhasInativas(){
        this.listaCampanhasInativas = this.listaCampanhas.filter(campanha => campanha.ativa == false)
        console.log('inativas',this.listaCampanhasInativas)
    }

}
