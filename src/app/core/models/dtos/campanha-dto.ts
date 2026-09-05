import { PersonagemDTO } from "./salvar.personagem-dto";
import { UsuarioDTO } from "./usuario-dto";

export interface CriarSolicitacaoCampanhaDTO {
    personagemId: number;
    mensagem: string;
}

export interface CampanhaSolicitacaoDTO {
    id: number;
    usuario: UsuarioDTO;
    personagem: PersonagemDTO;
    status: string;
    mensagem: string;
    criadoEm: string;
    atualizadoEm: string;
}

export interface CampanhaTimelineEventoDTO {
    id: number;
    tipo: string;
    conteudo: string;
    criadoEm: string;
    usuario: UsuarioDTO;
    personagem?: PersonagemDTO | null;
}

export interface CriarCampanhaTimelineEventoDTO {
    personagemId?: number | null;
    tipo: string;
    conteudo: string;
}

export interface CampanhaSessaoDTO {
    id: number;
    titulo: string;
    ativa: boolean;
    estadoMesa: string;
    iniciadaEm: string;
    atualizadaEm?: string | null;
    timeline: CampanhaTimelineEventoDTO[];
}

export interface CriarCampanhaSessaoDTO {
    titulo: string;
    estadoMesa: string;
}

export interface AtualizarEstadoMesaDTO {
    estadoMesa: string;
}

export interface CampanhaRealtimeEventDTO {
    type: string;
    campanhaId: number;
    solicitacoesPendentes?: number | null;
    solicitacao?: CampanhaSolicitacaoDTO | null;
    timelineEvento?: CampanhaTimelineEventoDTO | null;
    sessao?: CampanhaSessaoDTO | null;
}

export interface CampanhaDTO{
    id: number;
    mestre: UsuarioDTO;
    nome: string;
    ativa: boolean;
    nivel: number;
    introducao: string;
    personagens?: PersonagemDTO[];
    jogadores: UsuarioDTO[];
    solicitacoesPendentes?: number;
    sessaoAtiva?: CampanhaSessaoDTO | null;
    capaUrl?: string | null;  
}
