import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { API_URL_AUTH } from '../contants/api';
import { map } from 'rxjs';
import { RegisterDTO } from '../dto/register-dto';
import { LoginDTO } from '../dto/login-dto';

@Injectable({
  providedIn: 'root'
})
export class SistemaService implements OnInit {

  constructor(
    private http: HttpClient
  ) { 

  }

  ngOnInit(){
    
  }

  login(body: LoginDTO){
    return this.http.post(`${API_URL_AUTH}/login`, body).pipe(map(res => {
      return res;
    }))
  }

  register(body: RegisterDTO){
    return this.http.post(`${API_URL_AUTH}/register`, body).pipe(map(res => {
      return res;
    }));
  }

}
