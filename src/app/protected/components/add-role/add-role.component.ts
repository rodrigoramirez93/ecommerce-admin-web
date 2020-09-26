import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddRoleModel } from 'src/app/core/models/add-role-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ErrorMessages, InformationMessages, StyleConstants, ValidationConstants } from 'src/app/shared/constants';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  constructor(private fb:FormBuilder, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngUnsubscribe = new Subject();
  addRoleForm: FormGroup;

  username = new FormControl('', 
  [Validators.required,
   Validators.maxLength(ValidationConstants.MAX_LENGTH_USERNAME),
   Validators.minLength(ValidationConstants.MIN_LENGTH_USERNAME)
  ]);

  role = new FormControl('', 
  [Validators.required
  ]);

  usernameMinLengthErrorMessage = ErrorMessages.MIN_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MIN_LENGTH_USERNAME);
  usernameMaxLengthErrorMessage = ErrorMessages.MAX_LENGTH_ERROR_MESSAGE('Username', ValidationConstants.MAX_LENGTH_USERNAME);
  usernameRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Username');

  roleRequiredErrorMessage = ErrorMessages.REQUIRED_ERROR_MESSAGE('Username');

  get usernameControl() { return this.addRoleForm.get('username') };
  get roleControl() { return this.addRoleForm.get('role') };

  addRole(){  
    let roleData: AddRoleModel = 
    {
       Username: this.username.value,
       Role: this.role.value
    };
    
    this.authService.addRole(roleData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        () => {
          this.snackBar.open(
            InformationMessages.ADDED_SUCCESFULLY('Role'),
            'hide',
            {
              horizontalPosition: StyleConstants.SNACKBAR_HORIZONTAL_POSITION,
              verticalPosition: StyleConstants.SNACKBAR_VERTICAL_POSITION,
              panelClass: ['snackbar-success']
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
              panelClass: ['snackbar-error']
            }
          );
        }
    );    
  }

  ngOnInit(): void {  
    this.addRoleForm = this.fb.group({
      username: this.username,
      role: this.role
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
