import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ArquetipoDTO } from '../dto/arquetipo-dto';
import { API_URL_ARQU } from '../contants/api';
import { map } from 'rxjs';
import { Arquetipo } from '../models/arquetipo';

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
