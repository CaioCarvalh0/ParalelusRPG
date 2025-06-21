import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardCampanhaComponent } from 'src/app/cards/card-campanha/card-campanha.component';
import { Campanha } from 'src/app/models/campanha';
import { CampanhaService } from 'src/app/service/campanha.service';
import { ModalService } from 'src/app/service/modal.service';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        CommonModule, ButtonModule   
        // CardCampanhaComponent
    ]
})
export class HomeComponent implements OnInit {
    listaCampanhas: Campanha[] = [];
    listaCampanhasAtivas: Campanha[] = [];
    listaCampanhasInativas: Campanha[] = [];

    private router = inject(Router);
    private campanhaService = inject(CampanhaService);
    private modal = inject(ModalService)
    constructor(){
    }
    
    ngOnInit(): void {
        this.buscarCampanhas()
    }

    buscarCampanhas(){
        // this.campanhaService.getListaCampanhas().subscribe(result => {
        //     this.listaCampanhas = result
        //     if(this.listaCampanhas.length > 0){
        //         this.getCampanhasAtivas()
        //         this.getCampanhasInativas()
        //     }
        // })
    }

    getCampanhasAtivas(){
        this.listaCampanhasAtivas = this.listaCampanhas.filter(campanha => campanha.ativa == true)
        console.log('ativas',this.listaCampanhasAtivas)
    }

    getCampanhasInativas(){
        this.listaCampanhasInativas = this.listaCampanhas.filter(campanha => campanha.ativa == false)
        console.log('inativas',this.listaCampanhasInativas)
    }

    navigateCriarCampanha(){
        this.router.navigate(['/campanha/home'])
    }

    nagigatePersonagens(){
        this.router.navigate(['/personagens'])
    }

    openModalEmBreve(){
        this.modal.emBreve()
    }

}
