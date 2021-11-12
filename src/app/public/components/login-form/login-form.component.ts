import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ValidationConstants, ErrorMessages, StyleConstants, InformationMessages } from '../../../shared/constants';
import { AuthService } from '../../../core/services/auth.service';
import { Authentication } from '../../../core/models/auth-model';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']  
})
export class LoginFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

  hide = true;

  ngUnsubscribe = new Subject();
  
  loginForm: FormGroup;
  username = new FormControl('', {
    validators: [Validators.required],
     updateOn: 'blur'
  }
);
  password = new FormControl('', {
    validators: [Validators.required],
      updateOn: 'blur'
  }
);

  usernameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MIN_LENGTH_USERNAME);
  usernameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MAX_LENGTH_USERNAME);
  usernameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Username');
  passwordMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MIN_LENGTH_PASSWORD);
  passwordMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Password', ValidationConstants.MAX_LENGTH_USERNAME);
  passwordRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Password');

  get usernameControl() { return this.loginForm.get('username') };
  get passwordControl() { return this.loginForm.get('password') };

  ngOnInit(): void {  
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password
    })
  }

  login(){  
    let authData: Authentication = {
       email: this.username.value,
       password: btoa(this.password.value)
    };
    
    this.authService.authenticate(authData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          //console.log('login form', res);
          this.authService.saveTokenInLocalStorage(res.idToken);
          this.authService.saveExpirationDateInLocalStorage(res.expirationDate);
          this.authService.saveUserInfoInLocalStorage(res.user);
          this.snackBar.open(
            InformationMessages.REDIRECT('user'),
            'hide',
            {
              horizontalPosition: StyleConstants.SNACKBAR_HORIZONTAL_POSITION_END,
              verticalPosition: StyleConstants.SNACKBAR_VERTICAL_POSITION_BOTTOM,
              duration: StyleConstants.SNACKBAR_DURATION,
              panelClass: [StyleConstants.SNACKBAR_TYPE_SUCCESS]
            }
          );
          this.router.navigate(['user/management']);
      },
        (error) => {
          //console.logog('error: ', error);
          this.snackBar.open(
            ErrorMessages.UNAUTHORIZED(),
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
