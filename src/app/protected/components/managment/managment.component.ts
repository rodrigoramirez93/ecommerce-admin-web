import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsService } from '../../../core/services/cards.service';
import { HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss']
})
export class ManagmentComponent implements OnInit {

  constructor(
    private cardsService: CardsService
    ) { }

  cardsVisible$: Observable<boolean> = new Observable<boolean>();

  @HostListener('window:popstate', ['$event'])

  onPopState(event) {
    this.cardsService.setCardVisible(true);
  }

  ngOnInit(): void {
    this.cardsVisible$ = this.cardsService.cardsVisible$;
  }
}
