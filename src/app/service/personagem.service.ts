import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PersonagemDTO } from '../dto/salvar.personagem-dto';
import { API_URL_PERS } from '../contants/api';
import { map } from 'rxjs';
import { Personagem } from '../models/personagem';
import { ApiResponse } from '../responses/api-response';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private http = inject(HttpClient);

  constructor() { }


  postSalvarPersonagem(body: PersonagemDTO) {
    return this.http.post<ApiResponse>(`${API_URL_PERS}/salvar`, body).pipe(map(result => {
      return result.mensagem;
    }))
  }

  getPersonagemOfUsuario(usuarioId: number) {
    return this.http.get<PersonagemDTO>(`${API_URL_PERS}/usuario/${usuarioId}`).pipe(map(result => {
      if(result.id != 0) return new Personagem().fromDTO(result);
      return null;
    }))
  }

  getImagemPersonagem(personagemId: number) {
    return this.http.get<string>(`${API_URL_PERS}/${personagemId}/imagem`,{ responseType: 'text' as 'json' }).pipe(map(result => {
      return result;
    }))
  }


}
