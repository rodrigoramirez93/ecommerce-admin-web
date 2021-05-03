import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  constructor() { }

  private firstNameSource = new BehaviorSubject<string>('');
  private lastNameSource = new BehaviorSubject<string>('');

  firstName$ = this.firstNameSource.asObservable();
  lastName$ = this.lastNameSource.asObservable();

  public get getFirstName(){
    return this.firstNameSource.value;
  }

  public get getLastName(){
    return this.lastNameSource.value;
  }

  setFirstName(firstName: string){
    this.firstNameSource.next(firstName);
  }

  setLastName(lastName: string){
    this.lastNameSource.next(lastName);
  }
}
