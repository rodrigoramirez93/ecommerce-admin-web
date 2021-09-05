import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn, AbstractControl, ValidationErrors, FormGroupDirective } from '@angular/forms';
import { ValidationConstants, ErrorMessages, StyleConstants, InformationMessages } from '../../../../../shared/constants';
import { AuthService } from '../../../.././../core/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Signup } from 'src/app/core/models/auth-model';
import { CardsService } from 'src/app/core/services/cards.service';
import { CustomValidator } from '../../../../../core/validators/same-password.validator';
import { PasswordErrorStateMatcher } from '../../../../../core/error-state-matchers/password-state-matcher';

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
  passwordForm: FormGroup;
  customValidator: CustomValidator = new CustomValidator();
  matcher = new PasswordErrorStateMatcher();

  username = new FormControl('', {
    validators: [Validators.required,
      Validators.maxLength(ValidationConstants.MAX_LENGTH_USERNAME),
      Validators.minLength(ValidationConstants.MIN_LENGTH_USERNAME)
     ],
    updateOn: 'blur'
  });

  password = new FormControl('', {
    validators:[Validators.required,
      Validators.maxLength(ValidationConstants.MAX_LENGTH_PASSWORD),
      Validators.minLength(ValidationConstants.MIN_LENGTH_PASSWORD)
      ],
    updateOn: 'blur'
  });

  confirmPassword = new FormControl('', {
    validators: [Validators.required,
      Validators.maxLength(ValidationConstants.MAX_LENGTH_PASSWORD),
      Validators.minLength(ValidationConstants.MIN_LENGTH_PASSWORD),
      ],
    updateOn: 'blur'
  });

  firstname = new FormControl('', {
    validators: [Validators.required,
        Validators.maxLength(ValidationConstants.MAX_LENGTH_NAME),
        Validators.minLength(ValidationConstants.MIN_LENGTH_NAME)
        ],
     updateOn: 'blur'
    });
    
  lastname = new FormControl('', {
    validators: [Validators.required,
      Validators.maxLength(ValidationConstants.MAX_LENGTH_NAME),
      Validators.minLength(ValidationConstants.MIN_LENGTH_NAME)
      ],
    updateOn: 'blur'
  });

  email = new FormControl('', {
    validators: [Validators.required,
      Validators.maxLength(ValidationConstants.MAX_LENGTH_EMAIL),
      Validators.minLength(ValidationConstants.MIN_LENGTH_EMAIL),
      Validators.pattern(ValidationConstants.EMAIL_REGEX)],
    updateOn: 'blur'
  });

  phoneNumber = new FormControl('', {
    validators: [Validators.required,
      Validators.maxLength(ValidationConstants.MAX_LENGTH_PHONE_NUMBER),
      Validators.minLength(ValidationConstants.MIN_LENGTH_PHONE_NUMBER),
      Validators.pattern(ValidationConstants.ONLY_NUMBERS_REGEX)],
    updateOn: 'blur'
  });

  usernameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MIN_LENGTH_USERNAME);
  usernameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MAX_LENGTH_USERNAME);
  usernameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Username');

  passwordMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MIN_LENGTH_PASSWORD);
  passwordMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MAX_LENGTH_PASSWORD);
  passwordRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Password');
  passwordsDontMatch = ErrorMessages.PASSWORDS_DONT_MATCH();

  firstnameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Firstname', ValidationConstants.MIN_LENGTH_NAME);
  firstnameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Firstname', ValidationConstants.MAX_LENGTH_NAME);
  firstnameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Firstname');

  lastnameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Lastname', ValidationConstants.MIN_LENGTH_NAME);
  lastnameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Lastname', ValidationConstants.MAX_LENGTH_NAME);
  lastnameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Lastname');

  emailMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Email', ValidationConstants.MIN_LENGTH_EMAIL);
  emailMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Email', ValidationConstants.MAX_LENGTH_EMAIL);
  emailRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Email');
  emailValidErrorMessage = ErrorMessages.EMAIL_NOT_VALID();

  phoneNumberMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Phone Number', ValidationConstants.MIN_LENGTH_PHONE_NUMBER);
  phoneNumberMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Phone Number', ValidationConstants.MAX_LENGTH_PHONE_NUMBER);
  phoneNumberRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Phone Number');
  phoneNumberShouldBeNumbersErrorMessage = ErrorMessages.PHONE_SHOULD_BE_ONLY_NUMBERS();

  get usernameControl() { return this.addUserForm.get('username') };
  get firstnameControl() { return this.addUserForm.get('firstname') };
  get lastnameControl() { return this.addUserForm.get('lastname') };
  get emailControl() { return this.addUserForm.get('email') };
  get phoneNumberControl() { return this.addUserForm.get('phoneNumber') };

  get passwordControl() { return this.passwordForm.get('password') };
  get confirmPasswordControl() { return this.passwordForm.get('confirmPassword') };
  
  ngOnInit(): void {

    this.passwordForm = this.fb.group({
      password: this.password,
      confirmPassword: this.confirmPassword,
    }, { validators: this.customValidator.checkPasswords });

    this.addUserForm = this.fb.group({
      username: this.username,
      passwordForm: this.passwordForm, 
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phoneNumber: this.phoneNumber
  });

    this.cardsVisible$ = this.cardsService.cardsVisible$;
  }

  onClickGoBack(){
    this.cardsService.setCardVisible(!this.cardsService.getCardsVisible);
  }

  addUser(addUserFormDirective: FormGroupDirective){  
    let authData: Signup = 
    {
       username: this.username.value,
       password: this.password.value,
       firstName: this.firstname.value,
       lastName: this.lastname.value,
       email: this.email.value,
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
              horizontalPosition: StyleConstants.SNACKBAR_HORIZONTAL_POSITION_END,
              verticalPosition: StyleConstants.SNACKBAR_VERTICAL_POSITION_BOTTOM,
              duration: StyleConstants.SNACKBAR_DURATION,
              panelClass: [StyleConstants.SNACKBAR_TYPE_SUCCESS]
            }
          );
          
          addUserFormDirective.resetForm();
          this.addUserForm.reset();
      },
        (errorResponse) => {
          console.log('error: ', errorResponse);
          this.snackBar.open(
            errorResponse?.error?.detail ?? ErrorMessages.INTERNAL_ERROR(),
            'hide',
            {
              horizontalPosition: StyleConstants.SNACKBAR_HORIZONTAL_POSITION_END,
              verticalPosition: StyleConstants.SNACKBAR_VERTICAL_POSITION_BOTTOM,
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