import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { SearchUser, SearchUserImpl } from 'src/app/core/models/search-user-model';
import { CardsService } from 'src/app/core/services/cards.service';
import { UserService } from 'src/app/core/services/user.service';
import { SearchUserService } from 'src/app/core/services/search-user.service';

@Component({
  selector: 'update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private snackBar: MatSnackBar,
    private cardsService: CardsService,
    private userService: UserService,
    private searchUserService: SearchUserService,
  ) {}

  cardsVisible$: Observable<boolean> = new Observable<boolean>();

  firstNameSearch = new FormControl('', []);
  lastNameSearch = new FormControl('', []);
  emailSearch = new FormControl('', []);
  phoneNumberSearch = new FormControl('', []);

  searchInformation: SearchUser = new SearchUserImpl();
  searchUserForm: FormGroup;

  ngOnInit(): void {
    this.cardsVisible$ = this.cardsService.cardsVisible$;

    this.saveFirstNameSearch('');
    this.saveLastNameSearch('');
    
    this.userService
      .searchUser(this.getUserSearch())
      .subscribe(result => {
        this.userService.setSearchedUsers(result)
      });
    
      this.searchUserForm = this.fb.group({
        firstNameSearch: this.firstNameSearch,
        lastNameSearch: this.lastNameSearch,
        emailSearch: this.emailSearch,
        phoneNumberSearch: this.phoneNumberSearch
    })
  }

  saveFirstNameSearch(value: string){
    this.searchUserService.setFirstName(value)
  }

  saveLastNameSearch(value: string){
    this.searchUserService.setLastName(value)
  }

  getUserSearch(firstName = '', lastName = ''){
    return new SearchUserImpl(firstName, lastName);
  }
  
  searchUser() {
    let searchUserInformation = 
      this.getUserSearch(
        this.searchUserService.getFirstName,
        this.searchUserService.getLastName);

    this.userService
      .setSearchUserInformation(searchUserInformation);

    this.userService
      .searchUser(searchUserInformation)
      .subscribe(result => this.userService.setSearchedUsers(result));
  }
}
