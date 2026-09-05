import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL_LIVRO } from '../contants/api';
import { LivroDTO, SecaoBlocoDTO, SecaoDTO } from '../models/dtos/livro-dto';
import { Livro, SecaoBloco, SecaoLivro } from '../models/livro';
import { ApiResponse } from '../responses/api-response';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private readonly http = inject(HttpClient);

  listarLivros(): Observable<Livro[]> {
    return this.http.get<ApiResponse<LivroDTO[]>>(API_URL_LIVRO).pipe(
      map(result => (result.data ?? []).map(item => new Livro().fromDTO(item)))
    );
  }

  buscarLivro(id: number): Observable<Livro> {
    return this.http.get<ApiResponse<LivroDTO>>(`${API_URL_LIVRO}/${id}`).pipe(
      map(result => new Livro().fromDTO(result.data))
    );
  }

  criarLivro(dto: Partial<LivroDTO>): Observable<Livro> {
    return this.http.post<ApiResponse<LivroDTO>>(API_URL_LIVRO, dto).pipe(
      map(result => new Livro().fromDTO(result.data))
    );
  }

  atualizarLivro(id: number, dto: Partial<LivroDTO>): Observable<Livro> {
    return this.http.put<ApiResponse<LivroDTO>>(`${API_URL_LIVRO}/${id}`, dto).pipe(
      map(result => new Livro().fromDTO(result.data))
    );
  }

  criarSecao(livroId: number, dto: Partial<SecaoDTO>): Observable<SecaoLivro> {
    return this.http.post<ApiResponse<SecaoDTO>>(`${API_URL_LIVRO}/${livroId}/secoes`, dto).pipe(
      map(result => new SecaoLivro().fromDTO(result.data))
    );
  }

  atualizarSecao(livroId: number, secaoId: number, dto: Partial<SecaoDTO>): Observable<SecaoLivro> {
    return this.http.put<ApiResponse<SecaoDTO>>(`${API_URL_LIVRO}/${livroId}/secoes/${secaoId}`, dto).pipe(
      map(result => new SecaoLivro().fromDTO(result.data))
    );
  }

  removerSecao(livroId: number, secaoId: number): Observable<void> {
    return this.http.delete<ApiResponse<void>>(`${API_URL_LIVRO}/${livroId}/secoes/${secaoId}`).pipe(
      map(() => void 0)
    );
  }

  criarBloco(secaoId: number, dto: Partial<SecaoBlocoDTO>): Observable<SecaoBloco> {
    return this.http.post<ApiResponse<SecaoBlocoDTO>>(`${API_URL_LIVRO}/secoes/${secaoId}/blocos`, dto).pipe(
      map(result => new SecaoBloco().fromDTO(result.data))
    );
  }

  atualizarBloco(secaoId: number, blocoId: number, dto: Partial<SecaoBlocoDTO>): Observable<SecaoBloco> {
    return this.http.put<ApiResponse<SecaoBlocoDTO>>(`${API_URL_LIVRO}/secoes/${secaoId}/blocos/${blocoId}`, dto).pipe(
      map(result => new SecaoBloco().fromDTO(result.data))
    );
  }

  removerBloco(secaoId: number, blocoId: number): Observable<void> {
    return this.http.delete<ApiResponse<void>>(`${API_URL_LIVRO}/secoes/${secaoId}/blocos/${blocoId}`).pipe(
      map(() => void 0)
    );
  }
}
