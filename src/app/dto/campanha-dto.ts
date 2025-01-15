import { Usuario } from "../models/usuario";

export interface CampanhaDTO{
    id: number;
    mestre: Usuario;
    nome: string;
    ativa: boolean;
    nivel: number;
    capa: string;  
}