import { CampanhaDTO } from "../dto/campanha-dto";
import { Usuario } from "./usuario";

export class Campanha {
    id: number = 0;
    mestre: Usuario = new Usuario();
    nome: string = '';
    ativa: boolean = false;
    nivel: number = 0; 
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
        this.capa = dto.capa;
        return this;
    }

}