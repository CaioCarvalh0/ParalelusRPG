import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandlerFn,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ModalService } from '../service/modal.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  private modalService = inject(ModalService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) { 
          this.modalService!.openModalError('Não autorizado - Redirecionando para login.');
        } else if (error.status === 403) {
          this.modalService!.openModalError('Acesso negado.');
        } else if (error.status === 500) {
          this.modalService!.openModalError('Erro no servidor. Tente novamente mais tarde.');
        } else {
          this.modalService!.openModalError('Erro desconhecido: ' + error.message);
        }
        return throwError(() => new Error('Erro processado pelo interceptor: ' + error.message));
      })
    );
  }
}
