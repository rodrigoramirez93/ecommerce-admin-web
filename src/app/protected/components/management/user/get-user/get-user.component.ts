import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/auth-model';
import { CardsService } from 'src/app/core/services/cards.service';
import { UserService } from 'src/app/core/services/user.service';
import { GetUserDataSource } from './get-user-datasource';

@Component({
  selector: 'get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;
  dataSource: GetUserDataSource;

  constructor(
    private userService: UserService,
    private cardsService: CardsService) {
  }
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName'];
  cardsVisible$: Observable<boolean> = new Observable<boolean>();

  ngOnInit() {
    this.cardsVisible$ = this.cardsService.cardsVisible$;
    this.dataSource = new GetUserDataSource(this.userService, this.userService.getSearchUserInformation);
  }

  onClickGoBack(){
    this.cardsService.setCardVisible(!this.cardsService.getCardsVisible);
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }
}