import { Caminho } from "../models/caminho";

export interface ArquetipoDTO {
    id: number;
    nome: string;
    caminho: Caminho;
}