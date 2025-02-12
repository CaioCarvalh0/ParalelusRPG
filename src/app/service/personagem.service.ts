import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PersonagemDTO } from '../dto/salvar.personagem-dto';
import { API_URL_PERS } from '../contants/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private http = inject(HttpClient);

  constructor() { }


  salvarPersonagem(body: PersonagemDTO){
    return this.http.post<String>(`${API_URL_PERS}/salvar`, body).pipe(map(result => {
        return result;
    }))
  }

  getPersonagemOfUsuario(usuarioId: number){
    return this.http.get<PersonagemDTO>(`${API_URL_PERS}/usuario/${usuarioId}`).pipe(map(result => {
        return result;
    }))
  }
}
