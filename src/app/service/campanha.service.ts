import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campanha } from '../models/campanha';
import { API_URL_CAMP } from '../contants/api';
import { map } from 'rxjs';
import { CampanhaDTO } from '../dto/campanha-dto';

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


}
