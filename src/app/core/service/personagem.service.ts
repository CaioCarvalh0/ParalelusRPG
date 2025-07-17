import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { API_URL_PERS } from '../contants/api';
import { map } from 'rxjs';
import { Personagem } from '../models/personagem';
import { ApiResponse } from '../responses/api-response';
import { PersonagemDTO } from '../models/dtos/salvar.personagem-dto';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  personagem = signal<Personagem>(new Personagem());

  private http = inject(HttpClient);

  constructor() { }

  setPersonagem(personagem: Personagem) {
    this.personagem.set(personagem);  
  }

  resetPersonagem() {
    this.personagem.set(new Personagem());
  }
  
  getPersonagemOfUsuario(usuarioId: number) {
    return this.http.get<ApiResponse<PersonagemDTO[]>>(`${API_URL_PERS}/usuario/${usuarioId}`).pipe(map(result => {
      if(result.data) {
        const data = Array.isArray(result.data) ? result.data : [result.data];
        return data.map(dto => new Personagem().fromDTO(dto));}
      return [];
    }))
  }

  postSalvarPersonagem(body: PersonagemDTO) {
    return this.http.post<ApiResponse<PersonagemDTO>>(`${API_URL_PERS}/salvar`, body).pipe(map(result => {
      return result;
    }))
  }

  getImagemPersonagem(personagemId: number) {
    return this.http.get<string>(`${API_URL_PERS}/${personagemId}/imagem`,{ responseType: 'text' as 'json' }).pipe(map(result => {
      return result;
    }))
  }


}
