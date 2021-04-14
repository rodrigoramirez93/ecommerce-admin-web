import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerLoaderService } from './core/services/spinner-loader.service';

@Component({
  selector: 'app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class App implements OnInit {
  constructor(public spinnerService: SpinnerLoaderService) { }
  
  spinnerVisible$: Observable<boolean> = new Observable<boolean>();

  ngOnInit(): void {
    this.spinnerVisible$ = this.spinnerService.spinnerVisible$;
  }
}
