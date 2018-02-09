import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpResponse } from 'selenium-webdriver/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
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
      }).catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.log(response);
        }

        return Observable.throw(response);
      });
  }
}
