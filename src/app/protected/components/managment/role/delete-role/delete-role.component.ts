import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.scss']
})
export class DeleteRoleComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private cardsService: CardsService
  ) {}

  cardsVisible$: Observable<boolean> = new Observable<boolean>();

  ngOnInit(): void {  
    this.cardsVisible$ = this.cardsService.cardsVisible$;
  }

}
