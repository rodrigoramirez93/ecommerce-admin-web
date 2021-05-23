import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, CONTROLLER, METHOD } from '../../shared/constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/auth-model';
import { SearchUser, SearchUserImpl } from '../models/search-user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private searchUserInformationSource = new BehaviorSubject<SearchUser>(new SearchUserImpl()); 
  private searchedUsersSource = new BehaviorSubject<User[]>([]);

  searchUserInformation$ = this.searchUserInformationSource.asObservable();
  searchedUsers$ = this.searchedUsersSource.asObservable();

  public get getSearchUserInformation(){
    return this.searchUserInformationSource.value;
  }

  public get getSearchedUsers(){
    return this.searchedUsersSource.value;
  }

  setSearchUserInformation(searchUser: SearchUser){
    this.searchUserInformationSource.next(searchUser);
  }

  setSearchedUsers(searchedUsers: User[]){
    this.searchedUsersSource.next(searchedUsers);
  }

  searchUser(searchModel: SearchUser){
    var searchParams  = new URLSearchParams;
    
    Object
    .keys(searchModel)
    .forEach(key => searchParams.append(key, searchModel[key]));
    
    var queryString = '/?' + searchParams.toString();
    
    var request$ = this.http.get<User[]>(
      API.IDENTITY + CONTROLLER.USER + queryString
    );

    return request$;
  }
}
