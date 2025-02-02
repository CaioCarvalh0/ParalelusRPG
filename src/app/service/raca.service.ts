import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_RACA } from '../contants/api';
import { RacaDTO } from '../dto/raca-dto';
import { Raca } from '../models/raca';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(
    private http: HttpClient
  ) { }

  getListaRacas() {
    return this.http.get<RacaDTO[]>(`${API_URL_RACA}`).pipe(map(result =>
      result.map(raca => new Raca().fromDTO(raca)
    )));
  }
}
