import { Component, effect, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { ModalService } from 'src/app/core/service/modal.service';
import { CampanhaService } from 'src/app/core/service/campanha.service';

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

  private router = inject(Router);
  private authService = inject(AuthenticationService);
  private modal = inject(ModalService);
  private campanhaService = inject(CampanhaService);

  constructor() {
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
            routerLink: '/painel-do-usuario'
          },
          {
            label: 'Livro',
            icon: 'pi pi-book',
            command: () => { this.openModalEmBreve(); }
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

    effect(() => {
      const campanha = this.campanhaService.campanha();
      const url = this.router.url;

      if (url.startsWith('/campanha/') && campanha?.nome) {
        this.pageTitle = campanha.nome;
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.atualizaTituloMenu(event.urlAfterRedirects);
      }
    });
  }

  atualizaTituloMenu(url: string) {
    if (url.startsWith('/campanha/')) {
      this.pageTitle = this.campanhaService.getCampanhaAtual()?.nome || 'Campanha';
      return;
    }

    switch (url) {
      case '/usuario':
        this.pageTitle = 'Painel do Usuario';
        break;
      case '/criacaodecampanha':
        this.pageTitle = 'Criacao de Campanha';
        break;
      case '/campanha':
      case '/campanha/home':
        this.pageTitle = 'Campanhas';
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
        this.pageTitle = 'Paralelus Rpg';
        break;
    }
  }

  navegarPara(url: string) {
    this.router.navigate([url]);
  }

  desLogar() {
    this.authService.removeTokenOnLocalStorage();
    this.router.navigate(['/']);
  }

  openModalEmBreve() {
    this.modal.emBreve();
  }
}
