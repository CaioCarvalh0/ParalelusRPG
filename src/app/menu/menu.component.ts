import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: true,
    imports: [
      MatIconModule,
      MatMenuModule
    ]
})
export class MenuComponent implements OnInit {
  pageTitle: string = 'Paralelus Rpg';

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) { 
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
        this.pageTitle = 'Paralellus Rpg';
        break;
    }
  }

  desLogar(){
    this.authService.removeTokenOnLocalStorage();
    this.router.navigate(['/']);
  }
}
