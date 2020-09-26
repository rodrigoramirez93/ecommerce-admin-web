import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageKeys } from '../../../shared/constants'; 

@Component({
  selector: 'user-redirection',
  templateUrl: './user-redirection.component.html',
  styleUrls: ['./user-redirection.component.scss']
})
export class UserRedirectionComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  get userName() { return this.authService.getFromLocalStorage(LocalStorageKeys.USER_FIRST_NAME) };
}
