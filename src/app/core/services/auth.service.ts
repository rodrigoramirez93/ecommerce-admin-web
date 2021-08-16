import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authentication, Signup, Token, User } from '../models/auth-model';
import { API, CONTROLLER, METHOD } from '../../shared/constants';
import { CoreModule } from '../core.module';
import { JwtHelperService } from '@auth0/angular-jwt/';
import { AddRole } from '../models/role-model';
import { JsonContentTypeInterceptor } from '../Interceptors/json-content-type.interceptor';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  private jwtHelper: JwtHelperService;

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService()
   }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');   
    return !this.jwtHelper.isTokenExpired(token);
  }

  authenticate(credentials: Authentication) {
    var request$ = this.http.post<Token>(
      API.IDENTITY + CONTROLLER.AUTH + METHOD.AUTH_SIGNIN,
      credentials
      );
    
    return request$;
  }

  addUser(credentials: Signup){
    var request$ = this.http.post(
      API.IDENTITY + CONTROLLER.USER,
      credentials
      );
    
    return request$;
  }

  addRole(data: AddRole){
    var request$ = this.http.post(
      API.IDENTITY + CONTROLLER.ROLE,
      data
      );
    
    return request$;
  }

  //set
  saveTokenInLocalStorage(token: string){
    localStorage.setItem('id_token', token);
  }

  saveExpirationDateInLocalStorage(expirationDate: Date){
    localStorage.setItem('expires_at', JSON.stringify(expirationDate.valueOf()))
  }

  saveUserInfoInLocalStorage(userInfo: User){
    localStorage.setItem('user_info', JSON.stringify(userInfo))
  }

  //get
  getFromLocalStorage(item: string){
    return localStorage.getItem(item);
  }

  getUserInfo(): User{
    var userInfo = this.getFromLocalStorage('user_info');
    console.log('userInfo', userInfo);
    var res = JSON.parse(userInfo) as User;
    console.log('res', res);
    return res;
  }

  isTokenExpired(){
    var token = this.getFromLocalStorage('id_token');
    return this.jwtHelper.isTokenExpired(token);
  }

  logout(){
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }
}
