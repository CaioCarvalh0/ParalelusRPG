
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Campanha } from 'src/app/core/models/campanha';
import { CampanhaService } from 'src/app/core/service/campanha.service';
import { ModalService } from 'src/app/core/service/modal.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
    ButtonModule
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
