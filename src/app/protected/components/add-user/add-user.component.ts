import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ValidationConstants, ErrorMessages, StyleConstants, InformationMessages } from '../../../shared/constants';
import { AuthService } from '../../../core/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupModel } from 'src/app/core/models/signup-model';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private fb:FormBuilder, private authService: AuthService, private snackBar: MatSnackBar) {}

  hide = true;
  ngUnsubscribe = new Subject();
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

  usernameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MIN_LENGTH_USERNAME);
  usernameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MAX_LENGTH_USERNAME);
  usernameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Username');

  passwordMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MIN_LENGTH_PASSWORD);
  passwordMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MAX_LENGTH_PASSWORD);
  passwordRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Password');

  firstnameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Firstname', ValidationConstants.MIN_LENGTH_NAME);
  firstnameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Firstname', ValidationConstants.MAX_LENGTH_NAME);
  firstnameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Firstname');

  lastnameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Lastname', ValidationConstants.MIN_LENGTH_NAME);
  lastnameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Lastname', ValidationConstants.MAX_LENGTH_NAME);
  lastnameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Lastname');

  get usernameControl() { return this.addUserForm.get('username') };
  get passwordControl() { return this.addUserForm.get('password') };
  get firstnameControl() { return this.addUserForm.get('firstname') };
  get lastnameControl() { return this.addUserForm.get('lastname') };

  ngOnInit(): void {  
    this.addUserForm = this.fb.group({
      username: this.username,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname 
    })
  }

  addUser(){  
    let authData: SignupModel = 
    {
       Email: this.username.value,
       Password: this.password.value,
       FirstName: this.firstname.value,
       LastName: this.lastname.value
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
        (error) => {
          console.log('error: ', error);
          this.snackBar.open(
            ErrorMessages.INTERNAL_ERROR(),
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

