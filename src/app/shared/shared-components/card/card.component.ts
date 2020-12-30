import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() titleText: string;
  @Input() contentText: string;
  @Input() redirectRoute: string;
  @Input() buttonText: string;

  constructor(private cardsService: CardsService) { }

  cardsVisible$: Observable<boolean> = new Observable<boolean>();

  ngOnInit(): void {
    this.cardsVisible$ = this.cardsService.cardsVisible$;
  }

  onClickCard(){
    this.cardsService.setCardVisible(!this.cardsService.getCardsVisible);
  }
}
