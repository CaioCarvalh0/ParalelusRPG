import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { LoginComponent } from './forms/login/login.component';
import { HomeComponent } from './principal/home/home.component';
import { PainelUsuarioComponent } from './principal/painel-usuario/painel-usuario.component';
import { CriacaoCampanhaComponent } from './campanha/criacao-campanha/criacao-campanha.component';
import { CampanhaComponent } from './campanha/campanha.component';
import { FichaComponent } from './personagens/ficha/ficha.component';
import { LivroComponent } from './livro/livro.component';
import { AuthGuard } from './guards/auth.guard';
import { PersonagensComponent } from './personagens/personagens/personagens.component';
import { personagensRoutes } from './personagens/personagens.routes';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'usuario', component: PainelUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'criacaodecampanha', component: CriacaoCampanhaComponent, canActivate: [AuthGuard] },
  { path: 'campanha', component: CampanhaComponent, canActivate: [AuthGuard] },
  { path: 'personagens', loadChildren: () => import('./personagens/personagens.routes').then(m => m.personagensRoutes), canActivate: [AuthGuard] },
  { path: 'livro', component: LivroComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];
