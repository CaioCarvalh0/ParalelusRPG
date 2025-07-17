import { Routes } from "@angular/router";

export const campanhasRoute : Routes = [
    { path: 'home' , loadComponent: () => import('./home-campanha/home-campanha.component').then(m => m.HomeCampanhaComponent) },
    { path: 'cricao' , loadComponent: () => import('./criacao-campanha/criacao-campanha.component').then(m => m.CriacaoCampanhaComponent) },
    { path: ':id', loadComponent: () => import('./campanha.component').then(m => m.CampanhaComponent) },
]