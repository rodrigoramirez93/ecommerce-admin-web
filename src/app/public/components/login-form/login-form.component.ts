import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ValidationConstants, ErrorMessages } from '../../../shared/constants';
// import { AuthService } from '../../services/auth.service';
// import { AuthenticationModel } from '../../models/auth-model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']  
})
export class LoginFormComponent implements OnInit {

  // , private AuthService: AuthService

  constructor(private fb:FormBuilder) {}

  hide = true;

  loginForm: FormGroup;

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
    
    // let authData: AuthenticationModel = 
    // {
    //    Email: this.username.value,
    //    Password: this.password.value
    // };
    
    // this.AuthService.authenticate(authData)
    //   .subscribe(_ => console.log(_));
    
  }
}
