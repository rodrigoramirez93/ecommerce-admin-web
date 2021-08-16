import { Component, OnInit } from '@angular/core';
import { AuthLabel, AuthLabelImpl } from '../core/models/auth-label-model';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPage implements OnInit {

  navLinks = [ 
    { path: 'managment', label: 'Managment' }
   ];
  
  authLabel: AuthLabelImpl;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    var userInfo = this.authService.getUserInfo();
    var tenantRole = userInfo.tenantsRoles[0];
    var name = userInfo.firstName + ' ' + userInfo.lastName;
    this.authLabel = new AuthLabelImpl(name, tenantRole.roleName, tenantRole.tenantName);
  }
}
