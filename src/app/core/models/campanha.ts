import { CampanhaDTO, CampanhaSolicitacaoDTO, CampanhaTimelineEventoDTO } from "./dtos/campanha-dto";
import { Personagem } from "./personagem";
import { Usuario } from "./usuario";

export class CampanhaSessao {
    id: number = 0;
    titulo: string = '';
    ativa: boolean = false;
    estadoMesa: string = '';
    iniciadaEm: string = '';
    atualizadaEm: string | null = null;
    timeline: CampanhaTimelineEventoDTO[] = [];

    constructor(init?: Partial<CampanhaSessao>) {
        Object.assign(this, init);
    }
}

export class CampanhaSolicitacao {
    id: number = 0;
    usuario: Usuario = new Usuario();
    personagem: Personagem = new Personagem();
    status: string = '';
    mensagem: string = '';
    criadoEm: string = '';
    atualizadoEm: string = '';

    constructor(init?: Partial<CampanhaSolicitacao>) {
        Object.assign(this, init);
    }

    fromDTO(dto: CampanhaSolicitacaoDTO): CampanhaSolicitacao {
        this.id = dto.id;
        this.usuario = new Usuario(dto.usuario);
        this.personagem = new Personagem().fromDTO(dto.personagem);
        this.status = dto.status;
        this.mensagem = dto.mensagem;
        this.criadoEm = dto.criadoEm;
        this.atualizadoEm = dto.atualizadoEm;
        return this;
    }
}

export class Campanha {
    id: number = 0;
    mestre: Usuario = new Usuario();
    nome: string = '';
    ativa: boolean = false;
    nivel: number = 0;
    introducao: string = '';
    personagens: Personagem[] = [];
    jogadores: Usuario[] = [];
    solicitacoesPendentes: number = 0;
    sessaoAtiva: CampanhaSessao | null = null;
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
        this.personagens = (dto.personagens ?? []).map(p => new Personagem().fromDTO(p));
        this.jogadores = (dto.jogadores ?? []).map(j => new Usuario(j));
        this.solicitacoesPendentes = dto.solicitacoesPendentes ?? 0;
        this.sessaoAtiva = dto.sessaoAtiva ? new CampanhaSessao({
            ...dto.sessaoAtiva,
            timeline: dto.sessaoAtiva.timeline ?? []
        }) : null;
        this.introducao = dto.introducao;
        this.capa = dto.capaUrl? dto.capaUrl : '';
        return this;
    }

}
