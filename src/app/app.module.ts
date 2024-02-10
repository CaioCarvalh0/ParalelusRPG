import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './forms/login/login.component';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { IndexComponent } from './principal/index/index.component';
import { CardCampanhaComponent } from './cards/card-campanha/card-campanha.component';
import { CardPersonagemComponent } from './cards/card-personagem/card-personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CadastroComponent,
    IndexComponent,
    CardCampanhaComponent,
    CardPersonagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
