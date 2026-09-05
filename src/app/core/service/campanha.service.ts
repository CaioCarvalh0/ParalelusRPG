import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Campanha, CampanhaSessao, CampanhaSolicitacao } from '../models/campanha';
import { API_URL_CAMP } from '../contants/api';
import { map, Observable } from 'rxjs';
import {
  AtualizarEstadoMesaDTO,
  CampanhaDTO,
  CampanhaSessaoDTO,
  CampanhaSolicitacaoDTO,
  CampanhaTimelineEventoDTO,
  CriarCampanhaSessaoDTO,
  CriarCampanhaTimelineEventoDTO,
  CriarSolicitacaoCampanhaDTO
} from '../models/dtos/campanha-dto';
import { ApiResponse } from '../responses/api-response';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {
  private readonly http = inject(HttpClient)

  public campanha = signal<Campanha | null>(null);

  constructor() { }

  setCampanha(campanha: Campanha) {
    this.campanha.set(campanha);
  }

  resetCampanha() {
    this.campanha.set(null);
  }

  getCampanhaAtual() {
    return this.campanha();
  }

  public getListaCampanhas() {
    return this.http.get<CampanhaDTO[]>(`${API_URL_CAMP}/listar`).pipe(map(result =>
      result.map(campanha => new Campanha().fromDTO(campanha)
      )));
  }

  public getListaCampanhasAtivas(): Observable<Campanha[]> {
    return this.http.get<CampanhaDTO[]>(`${API_URL_CAMP}/listar/ativas`).pipe(map(result =>
      result.map(campanha => new Campanha().fromDTO(campanha))
    ));
  }

  public postCriarCampanha(dto: CampanhaDTO): Observable<Campanha> {
    return this.http.post<ApiResponse<CampanhaDTO>>(`${API_URL_CAMP}/criar`, dto).pipe(map(result =>
      new Campanha().fromDTO(result.data)
    ));
  }

  public getCampanhaById(id: number): Observable<Campanha> {
    return this.http.get<ApiResponse<CampanhaDTO>>(`${API_URL_CAMP}/${id}`).pipe(
      map(result => {
        const campanha = new Campanha().fromDTO(result.data);
        this.campanha.set(campanha);
        return campanha;
      })
    );
  }

  public entrarNaCampanha(id: number, personagemId: number): Observable<Campanha> {
    return this.http.post<ApiResponse<CampanhaDTO>>(`${API_URL_CAMP}/${id}/entrar`, { personagemId }).pipe(
      map(result => {
        const campanha = new Campanha().fromDTO(result.data);
        this.campanha.set(campanha);
        return campanha;
      })
    );
  }

  public sairDaCampanha(id: number): Observable<Campanha> {
    return this.http.delete<ApiResponse<CampanhaDTO>>(`${API_URL_CAMP}/${id}/entrar`).pipe(
      map(result => {
        const campanha = new Campanha().fromDTO(result.data);
        this.campanha.set(campanha);
        return campanha;
      })
    );
  }

  public postUploadCapa(id: number, file: File): Observable<string> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<ApiResponse<string>>(`${API_URL_CAMP}/${id}/upload-capa`, formData).pipe(map(res =>
      res.data
    ));
  }

  public criarSolicitacao(id: number, dto: CriarSolicitacaoCampanhaDTO): Observable<CampanhaSolicitacao> {
    return this.http.post<ApiResponse<CampanhaSolicitacaoDTO>>(`${API_URL_CAMP}/${id}/solicitacoes`, dto).pipe(
      map(result => new CampanhaSolicitacao().fromDTO(result.data))
    );
  }

  public listarSolicitacoes(id: number): Observable<CampanhaSolicitacao[]> {
    return this.http.get<ApiResponse<CampanhaSolicitacaoDTO[]>>(`${API_URL_CAMP}/${id}/solicitacoes`).pipe(
      map(result => (result.data ?? []).map(item => new CampanhaSolicitacao().fromDTO(item)))
    );
  }

  public aprovarSolicitacao(id: number, solicitacaoId: number): Observable<CampanhaSolicitacao> {
    return this.http.post<ApiResponse<CampanhaSolicitacaoDTO>>(
      `${API_URL_CAMP}/${id}/solicitacoes/${solicitacaoId}/aprovar`,
      {}
    ).pipe(map(result => new CampanhaSolicitacao().fromDTO(result.data)));
  }

  public recusarSolicitacao(id: number, solicitacaoId: number): Observable<CampanhaSolicitacao> {
    return this.http.post<ApiResponse<CampanhaSolicitacaoDTO>>(
      `${API_URL_CAMP}/${id}/solicitacoes/${solicitacaoId}/recusar`,
      {}
    ).pipe(map(result => new CampanhaSolicitacao().fromDTO(result.data)));
  }

  public iniciarSessao(id: number, dto: CriarCampanhaSessaoDTO): Observable<CampanhaSessao | null> {
    return this.http.post<ApiResponse<CampanhaSessaoDTO>>(`${API_URL_CAMP}/${id}/sessao`, dto).pipe(
      map(result => this.toSessao(result.data))
    );
  }

  public getSessaoAtiva(id: number): Observable<CampanhaSessao | null> {
    return this.http.get<ApiResponse<CampanhaSessaoDTO | null>>(`${API_URL_CAMP}/${id}/sessao`).pipe(
      map(result => this.toSessao(result.data))
    );
  }

  public atualizarEstadoMesa(id: number, dto: AtualizarEstadoMesaDTO): Observable<CampanhaSessao | null> {
    return this.http.put<ApiResponse<CampanhaSessaoDTO>>(`${API_URL_CAMP}/${id}/mesa`, dto).pipe(
      map(result => this.toSessao(result.data))
    );
  }

  public finalizarSessao(id: number): Observable<CampanhaSessao | null> {
    return this.http.post<ApiResponse<CampanhaSessaoDTO>>(`${API_URL_CAMP}/${id}/sessao/finalizar`, {}).pipe(
      map(result => this.toSessao(result.data))
    );
  }

  public listarTimeline(id: number): Observable<CampanhaTimelineEventoDTO[]> {
    return this.http.get<ApiResponse<CampanhaTimelineEventoDTO[]>>(`${API_URL_CAMP}/${id}/timeline`).pipe(
      map(result => result.data ?? [])
    );
  }

  public registrarEventoTimeline(
    id: number,
    dto: CriarCampanhaTimelineEventoDTO
  ): Observable<CampanhaTimelineEventoDTO> {
    return this.http.post<ApiResponse<CampanhaTimelineEventoDTO>>(`${API_URL_CAMP}/${id}/timeline`, dto).pipe(
      map(result => result.data)
    );
  }

  private toSessao(dto?: CampanhaSessaoDTO | null): CampanhaSessao | null {
    if (!dto) {
      return null;
    }

    return new CampanhaSessao({
      ...dto,
      timeline: dto.timeline ?? []
    });
  }

}
