import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationModel } from '../models/auth-model';
import { SignupModel } from '../models/signup-model';
import { API, CONTROLLER, METHOD } from '../../shared/constants';
import { CoreModule } from '../core.module';
import { TokenDtoResponse, UserDto } from '../models/token-model';
import { JwtHelperService } from '@auth0/angular-jwt/';
import { AddRoleModel } from '../models/add-role-model';

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

  authenticate(credentials: AuthenticationModel) {
    var request$ = this.http.post<TokenDtoResponse>(
      API.BASE_API + CONTROLLER.AUTH + METHOD.LOGIN,
      credentials
      );
    
    return request$;
  }

  addUser(credentials: SignupModel){
    var request$ = this.http.post(
      API.BASE_API + CONTROLLER.AUTH + METHOD.SIGNUP,
      credentials
      );
    
    return request$;
  }

  addRole(data: AddRoleModel){
    var request$ = this.http.post(
      API.BASE_API + CONTROLLER.AUTH + METHOD.ADD_ROLE,
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

  saveUserDataInLocalStorage(userData: UserDto){
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
