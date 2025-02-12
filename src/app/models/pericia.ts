import { PericiaDTO } from "../dto/pericia-dto";

export class Pericia {
    id: number = 0;
    nome: string = '';
    pontos: number = 0;

    constructor(init?: Partial<Pericia>) {
        Object.assign(this, init);
    }

    fromDTO(periciaDTO: PericiaDTO): Pericia {
        this.id = periciaDTO.id;
        this.nome = periciaDTO.nome;
        this.pontos = periciaDTO.pontos;
        return this;
    }
}