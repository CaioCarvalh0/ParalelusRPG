import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL_ARQU } from '../contants/api';
import { map } from 'rxjs';
import { Arquetipo } from '../models/arquetipo';
import { ArquetipoDTO } from '../models/dtos/arquetipo-dto';

@Injectable({
  providedIn: 'root'
})
export class ArquetipoService {

  private http = inject(HttpClient)

  constructor() { }

  getListaArquetipos() {
    return this.http.get<ArquetipoDTO[]>(`${API_URL_ARQU}`).pipe(map(result => 
      result.map(arquetipo => new Arquetipo().fromDTO(arquetipo)
    )))
  }

}
