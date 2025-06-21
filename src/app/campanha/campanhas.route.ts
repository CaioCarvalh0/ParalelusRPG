import { Routes } from "@angular/router";

export const campanhasRoute : Routes = [
    { path: '', loadComponent: () => import('./campanha.component').then(m => m.CampanhaComponent) },
    { path: 'cricao' , loadComponent: () => import('./criacao-campanha/criacao-campanha.component').then(m => m.CriacaoCampanhaComponent) },
    { path: 'home' , loadComponent: () => import('./home-campanha/home-campanha.component').then(m => m.HomeCampanhaComponent) },
]