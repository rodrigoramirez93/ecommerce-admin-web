import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthComponent } from './auth.page';

@NgModule({
  declarations: [AuthComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
