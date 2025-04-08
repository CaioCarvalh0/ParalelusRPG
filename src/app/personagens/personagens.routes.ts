import { Routes } from "@angular/router";
import { FichaComponent } from "./ficha/ficha.component";
import { AuthGuard } from "../guards/auth.guard";
import { PersonagensComponent } from "./personagens/personagens.component";

export const personagensRoutes: Routes = [
    { path: '', loadComponent: () => import('./personagens/personagens.component').then(m => m.PersonagensComponent), canActivate: [AuthGuard] },
    { path: 'ficha', loadComponent: () => import('./ficha/ficha.component').then(m => m.FichaComponent), canActivate: [AuthGuard] },
]