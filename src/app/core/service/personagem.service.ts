import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { API_URL_PERS } from '../contants/api';
import { map, Observable } from 'rxjs';
import { Personagem } from '../models/personagem';
import { ApiResponse } from '../responses/api-response';
import { PersonagemDTO } from '../models/dtos/salvar.personagem-dto';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {
  private http = inject(HttpClient);
  
  public personagem = signal<Personagem>(new Personagem());

  constructor() { }

  setPersonagem(personagem: Personagem) {
    this.personagem.set(personagem);
  }

  resetPersonagem() {
    this.personagem.set(new Personagem());
  }

  public getPersonagemOfUsuario(usuarioId: number) {
    return this.http.get<ApiResponse<PersonagemDTO[]>>(`${API_URL_PERS}/usuario/${usuarioId}`).pipe(map(result => {
      if (result.data) {
        const data = Array.isArray(result.data) ? result.data : [result.data];
        return data.map(dto => new Personagem().fromDTO(dto));
      }
      return [];
    }))
  }

  public postSalvarPersonagem(body: PersonagemDTO) {
    return this.http.post<ApiResponse<PersonagemDTO>>(`${API_URL_PERS}/salvar`, body).pipe(map(result => 
      new Personagem().fromDTO(result.data)
    ))
  }

  public postUploadImagem(id: number, file: File): Observable<string> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<ApiResponse<string>>(`${API_URL_PERS}/${id}/upload-capa`, formData).pipe(map(res =>
      res.data
    ));
  }




}
