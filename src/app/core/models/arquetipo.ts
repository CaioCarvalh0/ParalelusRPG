import { Caminho } from "./caminho";
import { ArquetipoDTO } from "./dtos/arquetipo-dto";

export class Arquetipo {
    id: number = 0;
    nome: string = '';
    caminho: Caminho = new Caminho();

    constructor(init?: Partial<Arquetipo>) {
        Object.assign(this, init);
    }

    fromDTO(dto: ArquetipoDTO): Arquetipo {
        this.id = dto.id;
        this.nome = dto.nome;
        this.caminho = dto.caminho;
        return this;
    }
}