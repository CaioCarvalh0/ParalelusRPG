import { CaminhoDTO } from "./dtos/caminho-dto";

export class Caminho {
    id: number = 0;
    nome: string = '';

    constructor(init?: Partial<Caminho>) {
        Object.assign(this, init);
    }

    fromDTO(dto: CaminhoDTO): Caminho {
        this.id = dto.id;
        this.nome = dto.nome;
        return this;
    }
}