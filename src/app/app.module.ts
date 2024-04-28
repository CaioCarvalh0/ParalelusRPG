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
import { PainelUsuarioComponent } from './principal/painel-usuario/painel-usuario.component';
import { CriacaoCampanhaComponent } from './campanha/criacao-campanha/criacao-campanha.component';
import { CampanhaComponent } from './campanha/campanha.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FichaComponent } from './ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CadastroComponent,
    IndexComponent,
    CardCampanhaComponent,
    CardPersonagemComponent,
    PainelUsuarioComponent,
    CriacaoCampanhaComponent,
    CampanhaComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
