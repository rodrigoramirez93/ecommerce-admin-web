import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})

export class JsonContentTypeInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modified = req.clone({ 
      setHeaders: { "Content-Type": "application/json; charset=utf-8" } 
    });
    return next.handle(modified);
  }

}
