import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHeaderSetterInterceptor } from './Interceptors/jwt-header-setter.interceptor';
import { JsonContentTypeInterceptor } from './Interceptors/json-content-type.interceptor';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { SpinnerLoaderInterceptor } from './interceptors/spinner-loader.interceptor';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  JwtHeaderSetterInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  JsonContentTypeInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerLoaderInterceptor,
      multi: true
    },
    JwtAuthGuard
  ]
})
export class CoreModule { }
