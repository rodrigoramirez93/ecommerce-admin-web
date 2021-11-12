import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private cardsService: CardsService
  ) {}

  cardsVisible$: Observable<boolean> = new Observable<boolean>();

  ngOnInit(): void {  
    this.cardsVisible$ = this.cardsService.cardsVisible$;
  }

}
