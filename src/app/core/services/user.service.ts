import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, CONTROLLER, METHOD } from '../../shared/constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserTableItem } from 'src/app/protected/components/managment/user/get-user/get-user-datasource';
import { UserDto } from '../models/token-model';
import { SearchUser } from '../models/search-user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private searchUserInformationSource = new BehaviorSubject<SearchUser>(new SearchUser()); 
  private searchedUsersSource = new BehaviorSubject<UserDto[]>([]);

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

  setSearchedUsers(searchedUsers: UserDto[]){
    this.searchedUsersSource.next(searchedUsers);
  }

  searchUser(searchModel: SearchUser){
    var searchParams  = new URLSearchParams;
    
    Object
    .keys(searchModel)
    .forEach(key => searchParams.append(key, searchModel[key]));
    
    var queryString = '/?' + searchParams.toString();
    
    var request$ = this.http.get<UserDto[]>(
      API.BASE_API + CONTROLLER.USER + queryString
    );

    return request$;
  }
}
