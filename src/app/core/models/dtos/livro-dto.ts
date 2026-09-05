export interface SecaoBlocoDTO {
  id: number;
  secaoId: number;
  tipo: string;
  titulo: string;
  conteudo: string;
  payloadJson: string;
  ordem: number;
}

export interface SecaoDTO {
  id: number;
  livroId: number;
  titulo: string;
  ordem: number;
  blocos: SecaoBlocoDTO[];
}

export interface LivroDTO {
  id: number;
  titulo: string;
  descricao: string;
  secoes: SecaoDTO[];
}
