import { Routes } from '@angular/router';

import { LivroComponent } from './features/livro/livro.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/forms/login/login.component';
import { CadastroComponent } from './features/forms/cadastro/cadastro.component';
import { HomeComponent } from './features/home/home.component';
import { PainelUsuarioComponent } from './features/painel-usuario/painel-usuario.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'painel-do-usuario', component: PainelUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'campanha', loadChildren: () => import('./features/campanha/campanhas.route').then(m => m.campanhasRoute), canActivate: [AuthGuard] },
  { path: 'personagens', loadChildren: () => import('./features/personagens/personagens.routes').then(m => m.personagensRoutes), canActivate: [AuthGuard] },
  { path: 'livro', component: LivroComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];
  