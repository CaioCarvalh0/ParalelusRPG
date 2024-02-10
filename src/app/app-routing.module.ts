import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { LoginComponent } from './forms/login/login.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
