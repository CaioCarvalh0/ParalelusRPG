import { CampanhaDTO } from "../dto/campanha-dto";
import { Personagem } from "./personagem";
import { Usuario } from "./usuario";

export class Campanha {
    id: number = 0;
    mestre: Usuario = new Usuario();
    nome: string = '';
    ativa: boolean = false;
    nivel: number = 0;
    introducao: string = '';
    jogadores: Personagem[] = [];
    capa: string = '';

    constructor(init?: Partial<Campanha>) {
        Object.assign(this, init);
    }

    fromDTO(dto: CampanhaDTO): Campanha {
        this.id = dto.id;
        this.mestre = new Usuario(dto.mestre);
        this.nome = dto.nome;
        this.ativa = dto.ativa;
        this.nivel = dto.nivel;
        this.jogadores = (dto.jogadores ?? []).map(j => new Personagem().fromDTO(j));
        this.introducao = dto.introducao;
        this.capa = dto.capaBase64? dto.capaBase64 : '';
        return this;
    }

}