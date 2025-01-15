import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { API_URL_AUTH } from '../contants/api';
import { map } from 'rxjs';
import { RegisterDTO } from '../dto/register-dto';
import { LoginDTO } from '../dto/login-dto';
import { TokenDTO } from '../dto/token-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  constructor(
    private http: HttpClient
  ) {

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

  login(body: LoginDTO) {
    return this.http.post<TokenDTO>(`${API_URL_AUTH}/login`, body).pipe(map(result => {
      this.setTokenOnLocalStorage(result.token);
      return result;
    }))
  }

  register(body: RegisterDTO) {
    return this.http.post(`${API_URL_AUTH}/register`, body).pipe(map(result => {
      return result;
    }));
  }

}
