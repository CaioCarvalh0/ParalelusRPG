import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { LoginComponent } from './forms/login/login.component';
import { HomeComponent } from './principal/home/home.component';
import { PainelUsuarioComponent } from './principal/painel-usuario/painel-usuario.component';
import { CriacaoCampanhaComponent } from './campanha/criacao-campanha/criacao-campanha.component';
import { CampanhaComponent } from './campanha/campanha.component';
import { FichaComponent } from './ficha/ficha.component';
import { LivroComponent } from './livro/livro.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent , canActivate: [false] },
  { path: 'usuario', component: PainelUsuarioComponent, canActivate: [false] },
  { path: 'criaçãodecampanha', component: CriacaoCampanhaComponent, canActivate: [false] },
  { path: 'campanha', component: CampanhaComponent, canActivate: [false] },
  { path: 'ficha', component: FichaComponent, canActivate: [AuthGuard] },
  { path: 'livro', component: LivroComponent, canActivate: [false] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
