import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campanha } from '../models/campanha';
import { API_URL_CAMP } from '../contants/api';
import { map, Observable } from 'rxjs';
import { CampanhaDTO } from '../models/dtos/campanha-dto';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {

  constructor(
    private http: HttpClient
  ) { }

  getListaCampanhas() {
    return this.http.get<CampanhaDTO[]>(`${API_URL_CAMP}/listar`).pipe(map(result =>
      result.map(campanha => new Campanha().fromDTO(campanha)
    )));
  }

  getListaCampanhasAtivas(): Observable<Campanha[]> {
    return this.http.get<CampanhaDTO[]>(`${API_URL_CAMP}/listar/ativas`).pipe(map(result =>
      result.map(campanha => new Campanha().fromDTO(campanha))
    ));
  }

  postCriarCampanha(dto: CampanhaDTO): Observable<Campanha> {
    return this.http.post<CampanhaDTO>(`${API_URL_CAMP}/criar`, dto).pipe(map(result =>
      new Campanha().fromDTO(result)
    ));
  }

}
