import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { UserPage } from './user.page';

import { managementComponent } from './components/management/management.component';

import { AddUserComponent } from './components/management/user/add-user/add-user.component';
import { DeleteUserComponent } from './components/management/user/delete-user/delete-user.component';
import { GetUserComponent } from './components/management/user/get-user/get-user.component';
import { UpdateUserComponent } from './components/management/user/update-user/update-user.component';

import { AddRoleComponent } from './components/management/role/add-role/add-role.component';
import { GetRoleComponent } from './components/management/role/get-role/get-role.component';
import { DeleteRoleComponent } from './components/management/role/delete-role/delete-role.component';
import { UpdateRoleComponent } from './components/management/role/update-role/update-role.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    UserPage,
    managementComponent,  
      
      AddUserComponent, 
      GetUserComponent,
      UpdateUserComponent,
      DeleteUserComponent,

      AddRoleComponent,
      DeleteRoleComponent, 
      GetRoleComponent, 
      UpdateRoleComponent
    ],
  
  imports: [
    CommonModule,
    SharedModule,
    ProtectedRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ProtectedModule { }
