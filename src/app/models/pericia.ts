import { PericiaDTO } from "../dto/pericia-dto";

export class Pericia {
    id: number = 0;
    nome: string = '';

    constructor(init?: Partial<Pericia>) {
        Object.assign(this, init);
    }

    fromDTO(periciaDTO: PericiaDTO): Pericia {
        this.id = periciaDTO.id;
        this.nome = periciaDTO.nome;
        return this;
    }
}