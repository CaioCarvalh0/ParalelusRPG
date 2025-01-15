import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ModalService } from '../service/modal.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private modalService: ModalService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) { 
          // Caso de não autorizado (401)
          console.error('Não autorizado - Redirecionando para login.');
          this.modalService.openModalError('Não autorizado - Redirecionando para login.');
          // Adicione ações como redirecionamento para tela de login
        } else if (error.status === 403) {
          // Caso de acesso negado (403)
          console.error('Acesso negado.');
          this.modalService.openModalError('Acesso negado.');
        } else if (error.status === 500) {
          // Caso de erro interno do servidor (500)
          console.error('Erro no servidor. Tente novamente mais tarde.');
          this.modalService.openModalError('Erro no servidor. Tente novamente mais tarde.');
        } else {
          // Outros erros
          console.error('Erro desconhecido:', error.message);
          this.modalService.openModalError('Erro desconhecido: ' + error.message);
        }
        return throwError(() => new Error('Erro processado pelo interceptor: ' + error.message));
      })
    );
  }
}
