import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPage implements OnInit {

  navLinks = [ 
    { path: "add", label: "Add user" },
    { path: "remove", label: "Remove user" }
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
