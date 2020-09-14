import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthenticationModel } from '../models/auth-model';
import { API, CONTROLLER, METHOD } from 'src/app/shared/constants';

interface Token {
  Value: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
   }

  authenticate(credentials: AuthenticationModel) {
    return this.http.post<Token>(
      `${API.BASE_API}${CONTROLLER.AUTH}${METHOD.LOGIN}`,
      credentials
      );
  }
}
