import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UsuarioDTO } from '../dto/usuario-dto';
import { ApiResponse } from '../responses/api-response';
import { API_URL_USER } from '../contants/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  constructor() { }



}
