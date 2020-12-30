import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagmentService {

  constructor() { }

  private cardsVisibleSource = new BehaviorSubject<boolean>(true);
    
  cardsVisible$ = this.cardsVisibleSource.asObservable();
  
  public get getCardsVisible(){
    return this.cardsVisibleSource.value;
  }

  setCardVisible(cardVisible: boolean){
    console.log('setCardVisible', cardVisible);
    this.cardsVisibleSource.next(cardVisible);
  }
}
