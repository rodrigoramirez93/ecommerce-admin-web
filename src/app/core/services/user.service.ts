import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, CONTROLLER, METHOD } from '../../shared/constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserTableItem } from 'src/app/protected/components/managment/user/get-user/get-user-datasource';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userTableItemSource = new BehaviorSubject<UserTableItem[]>([]);

  userTableItem$ = this.userTableItemSource.asObservable();

  public get getUserTableItem(){
    return this.userTableItemSource.value;
  }

  setGetUserItem(userTableItem: UserTableItem[]){
    this.userTableItemSource.next(userTableItem);
  }

  getUser(): Observable<UserTableItem[]>{
    console.log('i been called get user');
    var request$ = this.http.get<UserTableItem[]>(
      API.BASE_API + CONTROLLER.USER
      );
    
    return request$;
  }
}
