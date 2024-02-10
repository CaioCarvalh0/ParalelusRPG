import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { LoginComponent } from './forms/login/login.component';
import { IndexComponent } from './principal/index/index.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'index', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
