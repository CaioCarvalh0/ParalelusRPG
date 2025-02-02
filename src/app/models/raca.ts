import { RacaDTO } from "../dto/raca-dto";

export class Raca {
    id: number = 0;
    nome: string = '';

    constructor(init?: Partial<Raca>) {
        Object.assign(this, init);
    }

    fromDTO(dto: RacaDTO): Raca {
        this.id = dto.id;
        this.nome = dto.nome;
        return this;
    }
}