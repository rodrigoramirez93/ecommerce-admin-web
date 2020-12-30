import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagmentService } from '../../../core/services/managment.service';

@Component({
  selector: 'managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss']
})
export class ManagmentComponent implements OnInit {

  constructor(private managmentService: ManagmentService) { }

  cardsVisible$: Observable<boolean> = new Observable<boolean>();

  ngOnInit(): void {
    this.cardsVisible$ = this.managmentService.cardsVisible$;
  }

  onClickCard(id){
    console.log(id);
    return;
    // this.managmentService.setCardVisible(!this.managmentService.getCardsVisible);
  }
}
