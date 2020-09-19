import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navLinks = [
    {
      path: "/home",
      label: "Home"
    },
    {
      path: "/home/news",
      label: "News"
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
