import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthComponent } from './auth.page';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [AuthComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AuthComponent],
  providers: [LoginService]
})
export class AuthModule { }
