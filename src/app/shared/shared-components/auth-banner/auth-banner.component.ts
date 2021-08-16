import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CardsService } from 'src/app/core/services/cards.service';
import { UserService } from 'src/app/core/services/user.service';
import { InformationMessages, StyleConstants } from '../../constants';

@Component({
  selector: 'auth-banner',
  templateUrl: './auth-banner.component.html',
  styleUrls: ['./auth-banner.component.scss']
})
export class AuthBannerComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private cardService: CardsService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  clickHome(){
    this.redirectTo("/user");
  }

  clickLogout(){
    this.authService.logout();
    this.router.navigate(['']);
    this.snackBar.open(
      InformationMessages.REDIRECT('Home. See you later!'),
      'hide',
      {
        horizontalPosition: StyleConstants.SNACKBAR_HORIZONTAL_POSITION,
        verticalPosition: StyleConstants.SNACKBAR_VERTICAL_POSITION,
        duration: StyleConstants.SNACKBAR_DURATION,
        panelClass: [StyleConstants.SNACKBAR_TYPE_SUCCESS]
      }
    );
  }

  redirectTo(route){
    this.cardService.setCardVisible(true);
    this.router.navigate([route]);
  }

}
