import { LivroDTO, SecaoBlocoDTO, SecaoDTO } from "./dtos/livro-dto";

export class SecaoBloco {
  id: number = 0;
  secaoId: number = 0;
  tipo: string = 'TEXTO';
  titulo: string = '';
  conteudo: string = '';
  payloadJson: string = '';
  ordem: number = 0;

  constructor(init?: Partial<SecaoBloco>) {
    Object.assign(this, init);
  }

  fromDTO(dto: SecaoBlocoDTO): SecaoBloco {
    this.id = dto.id;
    this.secaoId = dto.secaoId;
    this.tipo = dto.tipo;
    this.titulo = dto.titulo;
    this.conteudo = dto.conteudo;
    this.payloadJson = dto.payloadJson;
    this.ordem = dto.ordem;
    return this;
  }
}

export class SecaoLivro {
  id: number = 0;
  livroId: number = 0;
  titulo: string = '';
  ordem: number = 0;
  blocos: SecaoBloco[] = [];

  constructor(init?: Partial<SecaoLivro>) {
    Object.assign(this, init);
  }

  fromDTO(dto: SecaoDTO): SecaoLivro {
    this.id = dto.id;
    this.livroId = dto.livroId;
    this.titulo = dto.titulo;
    this.ordem = dto.ordem;
    this.blocos = (dto.blocos ?? []).map(bloco => new SecaoBloco().fromDTO(bloco));
    return this;
  }
}

export class Livro {
  id: number = 0;
  titulo: string = '';
  descricao: string = '';
  secoes: SecaoLivro[] = [];

  constructor(init?: Partial<Livro>) {
    Object.assign(this, init);
  }

  fromDTO(dto: LivroDTO): Livro {
    this.id = dto.id;
    this.titulo = dto.titulo;
    this.descricao = dto.descricao;
    this.secoes = (dto.secoes ?? []).map(secao => new SecaoLivro().fromDTO(secao));
    return this;
  }
}
