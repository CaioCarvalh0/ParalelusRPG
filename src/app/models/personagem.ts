import { Atributos } from "./atributos";
import { Caminho } from "./caminho";
import { Pericia } from "./pericia";
import { Raca } from "./raca";
import { Usuario } from "./usuario";

export class Personagem {
    id: number = 0;
    nome: string = '';
    usuario: Usuario = new Usuario();
    raca: Raca = new Raca();
    caminho: Caminho[] = [];
    pericia: Pericia[] = [];
    atributos: Atributos = new Atributos();
    maxvida: number = 100;
    vidaatual: number = 100;
    maxmana: number = 100;
    manaatual: number = 100;
    defesa: number = 0;
    inventario: string = '';
    imagem: string = '';
}