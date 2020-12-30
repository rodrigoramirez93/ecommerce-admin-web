import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  private cardsVisibleSource = new BehaviorSubject<boolean>(true);
    
  cardsVisible$ = this.cardsVisibleSource.asObservable();
  
  public get getCardsVisible(){
    return this.cardsVisibleSource.value;
  }

  setCardVisible(cardVisible: boolean){
    this.cardsVisibleSource.next(cardVisible);
  }
}
