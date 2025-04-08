import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    Menu,
    ButtonModule
  ]
})
export class MenuComponent implements OnInit {
  pageTitle: string = 'Paralelus Rpg';
  items: MenuItem[];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/index'
          },
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            routerLink: '/usuario'
          },
          {
            label: 'Livro',
            icon: 'pi pi-book',
            routerLink: '/livro'
          },
          {
            label: 'Sair',
            icon: 'pi pi-sign-out',
            command: () => {
              this.desLogar();
            }
          }
        ]
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.atualizaTituloMenu(event.url);
      }
    });

  }

  atualizaTituloMenu(url: string) {
    switch (url) {
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
      case '/personagens':
        this.pageTitle = 'Seus Personagens';
        break;
      case '/personagens/ficha':
        this.pageTitle = 'Ficha';
        break;
      default:
        this.pageTitle = 'Paralellus Rpg';
        break;
    }
  }

  desLogar() {
    this.authService.removeTokenOnLocalStorage();
    this.router.navigate(['/']);
  }
}
