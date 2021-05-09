import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authentication, Signup, Token, User } from '../models/auth-model';
import { API, CONTROLLER, METHOD } from '../../shared/constants';
import { CoreModule } from '../core.module';
import { JwtHelperService } from '@auth0/angular-jwt/';
import { AddRole } from '../models/role-model';

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
      API.BASE_API + CONTROLLER.AUTH + METHOD.AUTH_SIGNIN,
      credentials
      );
    
    return request$;
  }

  addUser(credentials: Signup){
    var request$ = this.http.post(
      API.BASE_API + CONTROLLER.USER,
      credentials
      );
    
    return request$;
  }

  addRole(data: AddRole){
    var request$ = this.http.post(
      API.BASE_API + CONTROLLER.ROLE,
      data
      );
    
    return request$;
  }

  getToken(){
    return localStorage.getItem('id_token');
  }

  getFromLocalStorage(key){
    return localStorage.getItem(key);
  }

  saveTokenInLocalStorage(token: string){
    console.log('save token', token);
    localStorage.setItem('id_token', token);
  }

  saveExpirationDateInLocalStorage(expirationDate: Date){
    console.log('save date', expirationDate);
    console.log('expirationDate', expirationDate.valueOf());
    localStorage.setItem('expires_at', JSON.stringify(expirationDate.valueOf()))
  }

  saveUserDataInLocalStorage(userData: User){
    console.log(userData);
    localStorage.setItem('user_data_id', userData.id);
    localStorage.setItem('user_data_firstname', userData.firstName);
    localStorage.setItem('user_data_lastname', userData.lastName);
  }

  isTokenExpired(){
    var token = this.getToken();
    var response = this.jwtHelper.isTokenExpired(token);
    console.log('is expired: ', response)
  }

  logout(){
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

}
