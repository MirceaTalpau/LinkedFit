import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import StorageHelper from '../helpers/StorageHelper';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.setHeaders(request));
  }

  setHeaders(request: HttpRequest<any>){
    let newHeaders = request.headers
    .set('Content-Type', 'application/json');
    const token = StorageHelper.getToken();
    if(token && request.url.indexOf('Authentification/Auth') == -1) {
      newHeaders = newHeaders
      .set('Authorization', 'Bearer ' + token)
    }

    return request.clone({headers: newHeaders, withCredentials: true});
  }
}
