import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationModel } from '../models/auth-model';
import { API, CONTROLLER, METHOD } from 'src/app/shared/constants';
import { AuthModule } from '../auth.module';

interface Token {
  IdToken: string;
  ExpirationDate: Date;
}

@Injectable({
  providedIn: AuthModule
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // public isAuthenticated(): boolean {    
  //   const token = localStorage.getItem('token');    
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

  authenticate(credentials: AuthenticationModel) {
    var request$ = this.http.post<Token>(
      API.BASE_API + CONTROLLER.AUTH + METHOD.LOGIN,
      credentials
      );
    
    return request$;
  }

  saveTokenInLocalStorage(token: string){
    localStorage.setItem('id_token', token);
  }

  saveExpirationDateInLocalStorage(expirationDate: Date){
    localStorage.setItem('expires_at', JSON.stringify(expirationDate.valueOf()))
  }
}
