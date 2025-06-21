import { Routes } from '@angular/router';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { LoginComponent } from './forms/login/login.component';
import { HomeComponent } from './principal/home/home.component';
import { PainelUsuarioComponent } from './principal/painel-usuario/painel-usuario.component';
import { LivroComponent } from './livro/livro.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'painel-do-usuario', component: PainelUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'campanha', loadChildren: () => import('./campanha/campanhas.route').then(m => m.campanhasRoute), canActivate: [AuthGuard] },
  { path: 'personagens', loadChildren: () => import('./personagens/personagens.routes').then(m => m.personagensRoutes), canActivate: [AuthGuard] },
  { path: 'livro', component: LivroComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];
