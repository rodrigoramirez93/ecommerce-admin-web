import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor() { }

  navLinks = [
    {
      path: "welcome",
      label: "Home"
    },
    {
      path: "news",
      label: "News"
    }];

  ngOnInit(): void {
  }

}
