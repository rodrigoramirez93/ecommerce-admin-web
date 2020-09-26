import { Component, OnInit } from '@angular/core';
import { SpinnerLoaderService } from '../../../core/services/spinner-loader.service';

@Component({
  selector: 'spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.scss']
})
export class SpinnerLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
