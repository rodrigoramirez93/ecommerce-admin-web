import { Component, Input, OnInit } from '@angular/core';
import { AuthLabelImpl } from 'src/app/core/models/auth-label-model';

@Component({
  selector: 'auth-label',
  templateUrl: './auth-label.component.html',
  styleUrls: ['./auth-label.component.scss']
})
export class AuthLabelComponent implements OnInit {

  constructor() { }

  @Input() authLabel: AuthLabelImpl;

  user: string;
  role: string;
  tenant: string;

  ngOnInit(): void {
    this.user = this.authLabel.userName;
    this.role = this.authLabel.role;
    this.tenant = this.authLabel.tenant;
  }
}
