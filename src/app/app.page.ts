import { Component } from '@angular/core';
import { SpinnerLoaderService } from './core/services/spinner-loader.service';

@Component({
  selector: 'app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class App {
  constructor(public spinnerService: SpinnerLoaderService) { }
}
