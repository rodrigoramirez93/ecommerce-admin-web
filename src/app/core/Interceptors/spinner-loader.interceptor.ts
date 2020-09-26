import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { SpinnerLoaderService } from '../services/spinner-loader.service';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: CoreModule
})

export class SpinnerLoaderInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerLoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('spinner interceptor');
    this.spinnerService.show();

    return next.handle(req).pipe(tap(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.hide();
        }
      },
      (err: any) => {
        this.spinnerService.hide();
      }
    ));

  }

}
