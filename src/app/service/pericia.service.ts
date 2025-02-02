import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL_PERI } from '../contants/api';
import { PericiaDTO } from '../dto/pericia-dto';
import { Pericia } from '../models/pericia';
import { map } from 'rxjs';

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
