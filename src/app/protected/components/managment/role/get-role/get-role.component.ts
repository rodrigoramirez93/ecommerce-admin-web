import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'get-role',
  templateUrl: './get-role.component.html',
  styleUrls: ['./get-role.component.scss']
})
export class GetRoleComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private cardsService: CardsService
  ) {}

  cardsVisible$: Observable<boolean> = new Observable<boolean>();

  ngOnInit(): void {  
    this.cardsVisible$ = this.cardsService.cardsVisible$;
  }

}
