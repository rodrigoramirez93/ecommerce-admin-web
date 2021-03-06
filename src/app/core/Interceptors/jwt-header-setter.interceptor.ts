import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})

export class JwtHeaderSetterInterceptor implements HttpInterceptor {  

  constructor(public auth: AuthService) {}  
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getFromLocalStorage('id_token')}`
      }
    });    
    
    return next.handle(request);
  }
}