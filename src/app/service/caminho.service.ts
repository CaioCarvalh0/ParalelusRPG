import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL_CAMI } from '../contants/api';
import { CaminhoDTO } from '../dto/caminho-dto';
import { Caminho } from '../models/caminho';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaminhoService {

  private http = inject(HttpClient)

  constructor() { }


  getListaCaminhos(){
    return this.http.get<CaminhoDTO[]>(`${API_URL_CAMI}`).pipe(map(result =>
      result.map(caminho => new Caminho().fromDTO(caminho)
    )))
  }

}
