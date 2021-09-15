import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TenantService } from '../services/tenant.service';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {

  constructor(private tenantService: TenantService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    var tenantHeader = this.tenantService.getTenantHeader();

    //console.log('interceptor', tenantHeader);

    request = request.clone({
      setHeaders: {
        'x-tenant': `${tenantHeader}`
      }
    });
    
    return next.handle(request);
  }
}
