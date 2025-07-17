import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";

export const personagensRoutes: Routes = [
    { path: '', loadComponent: () => import('./personagens/personagens.component').then(m => m.PersonagensComponent), canActivate: [AuthGuard] },
    { path: 'ficha', loadComponent: () => import('./ficha/ficha.component').then(m => m.FichaComponent), canActivate: [AuthGuard] },
]