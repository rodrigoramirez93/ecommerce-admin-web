import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from 'src/app/protected/classes/card';
import { Cards } from 'src/app/protected/classes/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  private userCards: Cards =  {
    context: 'User',
    cardList: [
       { titleText: 'Add User', buttonText: 'Create', contentText: 'Create a new blank user', redirectRoute: '/user/managment/add-user'},
       { titleText: 'Get All User', buttonText: 'Get', contentText: 'Retrieve all users', redirectRoute: '/user/managment/add-role'},
       { titleText: 'Update User', buttonText: 'Update', contentText: 'Update a given user', redirectRoute: '/user/managment/add-role'},
       { titleText: 'Delete User', buttonText: 'Delete', contentText: 'Delete a given user', redirectRoute: '/user/managment/add-role'}
    ]
  };

  private roleCards: Cards =  {
    context: 'Role',
    cardList: [
       { titleText: 'Add user to role', buttonText: 'Create', contentText: 'Add user to role', redirectRoute: '/user/managment/add-role'},
       { titleText: 'Get user roles', buttonText: 'Get', contentText: 'Get user roles', redirectRoute: '/user/managment/add-role'},
       { titleText: 'Update user role', buttonText: 'Update', contentText: 'Update user role', redirectRoute: '/user/managment/add-role'},
       { titleText: 'Delete role', buttonText: 'Delete', contentText: 'Delete role from user', redirectRoute: '/user/managment/add-role'},
       { titleText: 'Adding access', buttonText: 'Add', contentText: 'Adding access to a role', redirectRoute: '/user/managment/add-role'},
       { titleText: 'Remove access', buttonText: 'Remove', contentText: 'Remove access to a role', redirectRoute: '/user/managment/add-role'}
    ]
  };

  private userCardsSource = new BehaviorSubject<Card[]>(this.userCards.cardList);
  private roleCardsSource = new BehaviorSubject<Card[]>(this.roleCards.cardList);
  private userCardsVisibleSource = new BehaviorSubject<boolean>(true);
  private roleCardsVisibleSource = new BehaviorSubject<boolean>(true);  
  private cardsVisibleSource = new BehaviorSubject<boolean>(true);

  userCards$ = this.userCardsSource.asObservable();
  roleCards$ = this.roleCardsSource.asObservable();
  cardsVisible$ = this.cardsVisibleSource.asObservable();
  userCardsVisible$ = this.userCardsVisibleSource.asObservable();
  roleCardsVisible$ = this.roleCardsVisibleSource.asObservable();

  public get getCardsVisible(){
    return this.cardsVisibleSource.value;
  }

  public get getUserCards(){
    return this.userCardsSource.value;
  }

  public get getRoleCards(){
    return this.roleCardsSource.value;
  }

  public get getUserCardsVisible(){
    return this.userCardsVisibleSource.value;
  }

  public get getRoleCardsVisible(){
    return this.roleCardsVisibleSource.value;
  }

  setCardVisible(cardVisible: boolean){
    this.cardsVisibleSource.next(cardVisible);
  }

  setUserCards(userCards: Card[]){
    this.userCardsSource.next(userCards);
  }

  setRoleCards(roleCards: Card[]){
    this.roleCardsSource.next(roleCards);
  }

  setUserCardsVisible(cardsVisible: boolean){
    this.userCardsVisibleSource.next(cardsVisible);
  }

  setRoleCardsVisible(cardsVisible: boolean){
    this.roleCardsVisibleSource.next(cardsVisible);
  }
}
