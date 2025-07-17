import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_RACA } from '../contants/api';
import { Raca } from '../models/raca';
import { map, Observable } from 'rxjs';
import { RacaDTO } from '../models/dtos/raca-dto';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(
    private http: HttpClient
  ) { }

  getListaRacas(): Observable<Raca[]> {
    return this.http.get<RacaDTO[]>(`${API_URL_RACA}`).pipe(map(result =>
      result.map(raca => new Raca().fromDTO(raca)
    )));
  }
}
