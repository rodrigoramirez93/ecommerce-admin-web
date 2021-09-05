import { Component, Input, OnInit } from '@angular/core';
import { AuthLabelImpl } from 'src/app/core/models/auth-label-model';
import { TenantService } from '../../../core/services/tenant.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMessages, InformationMessages, StyleConstants } from '../../constants';

@Component({
  selector: 'auth-label',
  templateUrl: './auth-label.component.html',
  styleUrls: ['./auth-label.component.scss']
})
export class AuthLabelComponent implements OnInit {

  constructor(
    private tenantService: TenantService,
    private snackBarService: MatSnackBar) { }

  @Input() authLabel: AuthLabelImpl;

  user: string;
  role: string;
  tenant: string;

  ngOnInit(): void {
    this.user = this.authLabel.userName;
    this.role = this.authLabel.defaultTenant.roleName;
    this.tenant = this.authLabel.defaultTenant.tenantName;
  }

  onTenantClick(tenantId){
    console.log('tenant', tenantId);
    var tenant = this.authLabel.tenants.find(x => x.tenantId == tenantId);
    this.role = tenant.roleName;
    this.tenant = tenant.tenantName;
    this.tenantService.setTenantHeader(tenant.tenantHeader);
    this.snackBarService.open(
      InformationMessages.CHANGED_COMPANY(tenant.tenantName),
      'hide',
      {
        horizontalPosition: StyleConstants.SNACKBAR_HORIZONTAL_POSITION_END,
        verticalPosition: StyleConstants.SNACKBAR_VERTICAL_POSITION_BOTTOM,
        duration: StyleConstants.SNACKBAR_DURATION,
        panelClass: [StyleConstants.SNACKBAR_TYPE_SUCCESS]
      }
    );
  }
}
