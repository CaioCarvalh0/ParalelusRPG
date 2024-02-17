import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { LoginComponent } from './forms/login/login.component';
import { IndexComponent } from './principal/index/index.component';
import { PainelUsuarioComponent } from './principal/painel-usuario/painel-usuario.component';
import { CriacaoCampanhaComponent } from './campanha/criacao-campanha/criacao-campanha.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'index', component: IndexComponent },
  { path: 'usuario', component: PainelUsuarioComponent },
  { path: 'campanha', component: CriacaoCampanhaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
