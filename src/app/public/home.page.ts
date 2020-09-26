import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(public authService: AuthService) { }

  navLinks = [
    { path: "welcome", label: "Home" },
    { path: "news", label: "News"}
  ];

  ngOnInit(): void {
  }

  userIsLoggedIn(){
    return this.authService.isAuthenticated();
  }


}
