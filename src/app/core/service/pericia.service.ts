import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL_PERI } from '../contants/api';
import { Pericia } from '../models/pericia';
import { map } from 'rxjs';
import { PericiaDTO } from '../models/dtos/pericia-dto';

@Injectable({
  providedIn: 'root'
})
export class PericiaService {

  private http = inject(HttpClient);

  getListaPericias() {
    return this.http.get<PericiaDTO[]>(`${API_URL_PERI}`).pipe(map(result =>
      result.map(pericia => new Pericia().fromDTO(pericia)
      )));
  }
}
