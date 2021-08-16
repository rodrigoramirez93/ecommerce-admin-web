import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Cards } from 'src/app/core/models/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  private userCards: Cards =  {
    context: 'User',
    cardList: [
       { titleText: 'Add User', buttonText: 'Create', contentText: 'Create a new blank user', redirectRoute: '/user/managment/add-user'},
       { titleText: 'Manage Users', buttonText: 'Manage', contentText: 'Manage users', redirectRoute: '/user/managment/update-user'}
    ]
  };

  private roleCards: Cards =  {
    context: 'Role',
    cardList: [
       { titleText: 'Add role', buttonText: 'Create', contentText: 'Add new role', redirectRoute: '/user/managment/add-role'},
       { titleText: 'Manage roles', buttonText: 'Manage', contentText: 'Update role', redirectRoute: '/user/managment/update-role'},
    ]
  }

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
    console.log('cards visible', cardVisible);
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
