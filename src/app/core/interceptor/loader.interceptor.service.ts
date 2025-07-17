import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { LoaderService } from "../service/loader.service";


@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {

    private loaderService = inject(LoaderService)

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.start()
        return next.handle(req).pipe( finalize(() => this.loaderService.stop()))
    }

}