import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './forms/login/login.component';
import { CadastroComponent } from './forms/cadastro/cadastro.component';
import { HomeComponent } from './principal/home/home.component';
import { CardCampanhaComponent } from './cards/card-campanha/card-campanha.component';
import { CardPersonagemComponent } from './cards/card-personagem/card-personagem.component';
import { PainelUsuarioComponent } from './principal/painel-usuario/painel-usuario.component';
import { CriacaoCampanhaComponent } from './campanha/criacao-campanha/criacao-campanha.component';
import { CampanhaComponent } from './campanha/campanha.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FichaComponent } from './ficha/ficha.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { LivroComponent } from './livro/livro.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokeIntercotorService } from './interceptor/request-toke.interceptor.service';
import { ErrorInterceptorService } from './interceptor/error.interceptor.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    CardCampanhaComponent,
    CardPersonagemComponent,
    PainelUsuarioComponent,
    CriacaoCampanhaComponent,
    CampanhaComponent,
    FichaComponent,
    LivroComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
    ButtonModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokeIntercotorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
