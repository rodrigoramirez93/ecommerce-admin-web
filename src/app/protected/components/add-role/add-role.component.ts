import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ErrorMessages, ValidationConstants } from 'src/app/shared/constants';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

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
