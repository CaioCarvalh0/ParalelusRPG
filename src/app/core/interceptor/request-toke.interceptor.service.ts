 import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const headers: { [name: string]: string } = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    if (!(req.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }
    req = req.clone({ setHeaders: headers });
    return next.handle(req);
  }
}