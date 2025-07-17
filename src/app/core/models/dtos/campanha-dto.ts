import { PersonagemDTO } from "./salvar.personagem-dto";
import { UsuarioDTO } from "./usuario-dto";

export interface CampanhaDTO{
    id: number;
    mestre: UsuarioDTO;
    nome: string;
    ativa: boolean;
    nivel: number;
    introducao: string;
    jogadores: PersonagemDTO[];
    capaBase64?: string | null;  
}