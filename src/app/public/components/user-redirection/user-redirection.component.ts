import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'user-redirection',
  templateUrl: './user-redirection.component.html',
  styleUrls: ['./user-redirection.component.scss']
})
export class UserRedirectionComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private cardsService: CardsService
    ) { }

  ngOnInit(): void {
  }

  get userName() { 
    var userInfo = this.authService.getUserInfo();
    return userInfo.firstName + ' ' + userInfo.lastName;
  };

  onClickHome(){
    this.cardsService.setCardVisible(true);
  }
}
