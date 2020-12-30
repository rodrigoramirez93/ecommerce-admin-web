import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onClickCard(id){
    console.log(id);
    return;
    // this.managmentService.setCardVisible(!this.managmentService.getCardsVisible);
  }

}
