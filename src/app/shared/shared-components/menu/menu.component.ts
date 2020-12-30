import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() navLinks: [];

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }

  onClickBanner(){
    this.cardsService.setCardVisible(true);
  }

}
