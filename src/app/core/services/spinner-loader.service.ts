import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerLoaderService {

  constructor() { }

  private spinnerVisibleSource = new BehaviorSubject<boolean>(false);

  spinnerVisible$ = this.spinnerVisibleSource.asObservable();

  public get getSpinnerVisible(){
    return this.spinnerVisibleSource.value;
  }

  setSpinnerVisible(spinnerVisible: boolean){
    this.spinnerVisibleSource.next(spinnerVisible);
  }
}
