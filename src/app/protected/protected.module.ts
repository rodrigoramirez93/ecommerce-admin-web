import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { JwtHeaderSetterInterceptor } from '../core/Interceptors/jwt-header-setter.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
