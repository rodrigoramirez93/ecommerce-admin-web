import { Component, OnInit } from '@angular/core';
import { AuthLabel, AuthLabelImpl } from '../core/models/auth-label-model';
import { TenantRole } from '../core/models/auth-model';
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

  getFirstTenantRole(tenants: TenantRole[]){
    if (tenants[0] != undefined) return tenants[0];
    return null;
  } 

  getDefaultTenant(tenants: TenantRole[], defaultTenantId: number){
    return tenants.find(x => x.tenantId == defaultTenantId);
  }

  getTenant(tenants: TenantRole[], defaultTenantId: number){
    var defaultTenant = this.getDefaultTenant(tenants, defaultTenantId);
    if (defaultTenant) return defaultTenant;
    return this.getFirstTenantRole(tenants);
  }

  ngOnInit(): void {
    var userInfo = this.authService.getUserInfo();
    var name = userInfo.firstName + ' ' + userInfo.lastName;
    var tenantRole = this.getTenant(userInfo.tenantRole, parseInt(userInfo.defaultTenantId));
    this.authLabel = new AuthLabelImpl(name, tenantRole.roleName, tenantRole.tenantName);
  }
}
