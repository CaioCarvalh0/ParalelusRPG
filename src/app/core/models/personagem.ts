import { from } from "rxjs";
import { Atributos } from "./atributos";
import { Caminho } from "./caminho";
import { Pericia } from "./pericia";
import { Raca } from "./raca";
import { Usuario } from "./usuario";
import { Arquetipo } from "./arquetipo";
import { Singularidade } from "./singularidade";
import { PersonagemDTO } from "./dtos/salvar.personagem-dto";

export class Personagem {
    id: number = 0;
    nome: string = '';
    usuario: Usuario = new Usuario();
    raca: Raca = new Raca();
    caminho: Caminho[] = [];
    pericia: Pericia[] = [];
    arquetipo: Arquetipo[] = [];
    atributos: Atributos = new Atributos();
    maxvida: number = 100;
    vidaatual: number = 100;
    maxmana: number = 100;
    manaatual: number = 100;
    defesa: number = 0;
    inventario: string = '';
    singularidade: Singularidade = new Singularidade();
    imagem: string = '';
    caracteristicas: string = '';
    cibernetica: string = '';
    historia: string = '';
    level: number = 0;

    constructor(init?: Partial<Personagem>) {
        Object.assign(this, init);
    }

    fromDTO(dto: PersonagemDTO): Personagem {
        this.id = dto.id;
        this.nome = dto.nome;
        this.usuario = new Usuario(dto.usuario);
        this.raca = new Raca(dto.raca);
        this.caminho = (dto.caminho ?? []).map(c => new Caminho(c));
        this.pericia = (dto.pericias ?? []).map(p => new Pericia(p));
        this.arquetipo = (dto.arquetipo ?? []).map(a => new Arquetipo(a));
        this.atributos = new Atributos(dto.atributos);
        this.maxvida = dto.vidaMax;
        this.vidaatual = dto.vidaAtual;
        this.maxmana = dto.energiaMax;
        this.manaatual = dto.energiaAtual;
        this.defesa = dto.defesa;
        this.inventario = dto.inventario;
        this.singularidade = dto.singularidade;
        this.caracteristicas = dto.caracteristica;
        this.level = dto.level;
        this.imagem = dto.imagemBase64? dto.imagemBase64 : '';
        this.cibernetica = dto.cibernetica;
        this.historia = dto.historia;
        return this;
    }
}