import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { API_URL_AUTH } from '../contants/api';
import { BehaviorSubject, map } from 'rxjs';
import { RegisterDTO } from '../dto/register-dto';
import { LoginDTO } from '../dto/login-dto';
import { TokenDTO } from '../dto/token-dto';
import { Usuario } from '../models/usuario';
import { UsuarioDTO } from '../dto/usuario-dto';
import { ApiResponse } from '../responses/api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  private http = inject(HttpClient)

  private currentUserSubject = new BehaviorSubject<Usuario>(new Usuario());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  get currentUser(): Usuario {
    return this.currentUserSubject.value;
  }

  ngOnInit() {
    
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    return true;
  }

  removeTokenOnLocalStorage() {
    localStorage.removeItem('token');
  }

  private setTokenOnLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  private setCurrentUser(usuario: Usuario) {
    localStorage.setItem('currentUser', JSON.stringify(usuario));
    this.currentUserSubject.next(usuario);
  }

  login(body: LoginDTO) {
    return this.http.post<ApiResponse<TokenDTO>>(`${API_URL_AUTH}/login`, body, {
    }).pipe(map(result => {
      if(result.sucesso){
        this.setTokenOnLocalStorage(result.data.token);
        this.setCurrentUser(result.data.user);
      }
      return result;
    }))
  }

  register(body: RegisterDTO) {
    return this.http.post(`${API_URL_AUTH}/register`, body).pipe(map(result => {
      return result;
    }));
  }

  verificaUserCadastro(user: UsuarioDTO){
    return this.http.post<ApiResponse<String>>(`${API_URL_AUTH}/checkcadastro`, user).pipe(map(result => {
      return result;
    }))
  }

}
