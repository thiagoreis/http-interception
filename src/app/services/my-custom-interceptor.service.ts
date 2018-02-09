import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MyCustomInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = request.clone({
      headers: request.headers.set('Authorization', 'Bearer token')
    });
    return next.handle(cloneReq)
      .do((evento: HttpEvent<any>) => {
        if (evento instanceof HttpResponse) {
          console.log(evento);
        }
      }).catch(resposta => {
        if (resposta instanceof HttpErrorResponse) {
          console.log(resposta);
        }

        return Observable.throw(resposta);
      });
  }
}
