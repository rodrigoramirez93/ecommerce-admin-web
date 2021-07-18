import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ValidationConstants, ErrorMessages, StyleConstants, InformationMessages } from '../../../../../shared/constants';
import { AuthService } from '../../../.././../core/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Signup } from 'src/app/core/models/auth-model';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private cardsService: CardsService
  ) {}

  hide = true;
  ngUnsubscribe = new Subject();
  cardsVisible$: Observable<boolean> = new Observable<boolean>();
  addUserForm: FormGroup;

  username = new FormControl('', 
    [Validators.required,
     Validators.maxLength(ValidationConstants.MAX_LENGTH_USERNAME),
     Validators.minLength(ValidationConstants.MIN_LENGTH_USERNAME)
    ]);

  password = new FormControl('',
    [Validators.required,
    Validators.maxLength(ValidationConstants.MAX_LENGTH_PASSWORD),
    Validators.minLength(ValidationConstants.MIN_LENGTH_PASSWORD)
    ]);

  confirmPassword = new FormControl('',
    [Validators.required,
    Validators.maxLength(ValidationConstants.MAX_LENGTH_PASSWORD),
    Validators.minLength(ValidationConstants.MIN_LENGTH_PASSWORD)
    ]);

  firstname = new FormControl('',
    [Validators.required,
    Validators.maxLength(ValidationConstants.MAX_LENGTH_NAME),
    Validators.minLength(ValidationConstants.MIN_LENGTH_NAME)
    ]);
    
  lastname = new FormControl('',
    [Validators.required,
    Validators.maxLength(ValidationConstants.MAX_LENGTH_NAME),
    Validators.minLength(ValidationConstants.MIN_LENGTH_NAME)
    ]);

  email = new FormControl('',
    [Validators.required,
    Validators.maxLength(ValidationConstants.MAX_LENGTH_EMAIL),
    Validators.minLength(ValidationConstants.MIN_LENGTH_EMAIL)
  ]);

  phoneNumber = new FormControl('',
    [Validators.required,
    Validators.maxLength(ValidationConstants.MAX_LENGTH_PHONE_NUMBER),
    Validators.minLength(ValidationConstants.MIN_LENGTH_PHONE_NUMBER)
    ]);

  usernameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MIN_LENGTH_USERNAME);
  usernameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MAX_LENGTH_USERNAME);
  usernameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Username');

  passwordMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MIN_LENGTH_PASSWORD);
  passwordMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MAX_LENGTH_PASSWORD);
  passwordRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Password');

  confirmPasswordMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MIN_LENGTH_PASSWORD);
  confirmPasswordMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MAX_LENGTH_PASSWORD);
  confirmPasswordRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Password');

  firstnameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Firstname', ValidationConstants.MIN_LENGTH_NAME);
  firstnameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Firstname', ValidationConstants.MAX_LENGTH_NAME);
  firstnameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Firstname');

  lastnameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Lastname', ValidationConstants.MIN_LENGTH_NAME);
  lastnameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Lastname', ValidationConstants.MAX_LENGTH_NAME);
  lastnameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Lastname');

  emailMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Email', ValidationConstants.MIN_LENGTH_NAME);
  emailMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Email', ValidationConstants.MAX_LENGTH_NAME);
  emailRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Email');

  phoneNumberMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Phone Number', ValidationConstants.MIN_LENGTH_NAME);
  phoneNumberMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Phone Number', ValidationConstants.MAX_LENGTH_NAME);
  phoneNumberRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Phone Number');

  get usernameControl() { return this.addUserForm.get('username') };
  get passwordControl() { return this.addUserForm.get('password') };
  get confirmPasswordControl() { return this.addUserForm.get('password') };
  get firstnameControl() { return this.addUserForm.get('firstname') };
  get lastnameControl() { return this.addUserForm.get('lastname') };
  get emailControl() { return this.addUserForm.get('email') };
  get phoneNumberControl() { return this.addUserForm.get('phoneNumber') };
  
  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phoneNumber: this.phoneNumber
    })

    this.cardsVisible$ = this.cardsService.cardsVisible$;
  }

  onClickGoBack(){
    this.cardsService.setCardVisible(!this.cardsService.getCardsVisible);
  }

  addUser(){  
    let authData: Signup = 
    {
       username: this.username.value,
       email: this.email.value,
       password: this.password.value,
       firstName: this.firstname.value,
       lastName: this.lastname.value,
       phoneNumber: this.phoneNumber.value
    };
    
    this.authService.addUser(authData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        () => {
          this.snackBar.open(
            InformationMessages.ADDED_SUCCESFULLY('user'),
            'hide',
            {
              horizontalPosition: StyleConstants.SNACKBAR_HORIZONTAL_POSITION,
              verticalPosition: StyleConstants.SNACKBAR_VERTICAL_POSITION,
              duration: StyleConstants.SNACKBAR_DURATION,
              panelClass: [StyleConstants.SNACKBAR_TYPE_SUCCESS]
            }
          );
      },
        (errorResponse) => {
          console.log('error: ', errorResponse);
          this.snackBar.open(
            errorResponse?.error?.detail ?? ErrorMessages.INTERNAL_ERROR(),
            'hide',
            {
              horizontalPosition: StyleConstants.SNACKBAR_HORIZONTAL_POSITION,
              verticalPosition: StyleConstants.SNACKBAR_VERTICAL_POSITION,
              duration: StyleConstants.SNACKBAR_DURATION,
              panelClass: [StyleConstants.SNACKBAR_TYPE_ERROR]
            }
          );
        }
    );    
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}