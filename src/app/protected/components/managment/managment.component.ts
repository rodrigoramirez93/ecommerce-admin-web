import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss']
})
export class ManagmentComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
