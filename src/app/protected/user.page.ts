import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPage implements OnInit {

  navLinks = [ 
    { path: '', label: 'Home' },
    { path: 'managment', label: 'Managment' },
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
