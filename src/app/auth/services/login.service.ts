import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthenticationModel } from '../models/auth-model';
import { API } from 'src/app/shared/constants';

interface Article {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(auth: AuthenticationModel) {
    console.log(auth);
    return this.http.post<Article>(API.LOGIN, { title: 'Angular POST Request Example' });
  }
}
