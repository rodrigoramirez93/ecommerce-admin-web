import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsService } from '../../../core/services/cards.service';
import { HostListener } from '@angular/core';
import { Cards } from "../../classes/cards";
import { Card } from "../../classes/card";

@Component({
  selector: 'managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss']
})
export class ManagmentComponent implements OnInit {
  
  @HostListener('window:popstate', ['$event'])

  onPopState(event) {
    this.cardsService.setCardVisible(true);
  }

  constructor(
    private cardsService: CardsService
    ) { }

  cardsVisible$: Observable<boolean> = new Observable<boolean>();
  userCards$: Observable<Card[]> = new Observable<Card[]>();
  userCardsVisible$: Observable<boolean> = new Observable<boolean>();
  roleCardsVisible$: Observable<boolean> = new Observable<boolean>();
  roleCards$: Observable<Card[]> = new Observable<Card[]>();

  ngOnInit(): void {
    this.cardsVisible$ = this.cardsService.cardsVisible$;
    this.userCards$ = this.cardsService.userCards$;
    this.roleCards$ = this.cardsService.roleCards$;
    this.userCardsVisible$ = this.cardsService.userCardsVisible$;
    this.roleCardsVisible$ = this.cardsService.roleCardsVisible$;
  }
}