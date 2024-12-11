import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent implements OnInit {
  pageTitle: string = 'Paralelus Rpg';

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.atualizaTituloMenu(event.url);
      }
    });
   
  }

  atualizaTituloMenu(url: string){
    switch(url){
      case '/usuario':
        this.pageTitle = 'Painel do Usuário';
        break;
      case '/criaçãodecampanha':
        this.pageTitle = 'Criação de Campanha';
        break;
      case '/campanha':
        this.pageTitle = 'Campanha';
        break;
      case '/ficha':
        this.pageTitle = 'Ficha';
        break;
      case '/livro':
        this.pageTitle = 'Livro';
        break;
      default:
        this.pageTitle = 'Paralelus Rpg';
        break;
    }
  }
}
