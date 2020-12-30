import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from '../core/services/cards.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPage implements OnInit {

  navLinks = [ 
    { path: 'managment', label: 'Managment' }
   ];

  constructor(
    private cardsService: CardsService
  ) { }

  ngOnInit(): void {
  }

}
