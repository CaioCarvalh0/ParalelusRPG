export interface Campanha {
    id: number;
    dono: number;
    titulo: string;
    statusSessao: boolean;
    nivel: number; 
    jogadores: string;
    qtdSessoes: number; 
    qtdJogadores: number;
    capaCampanha: string;
}