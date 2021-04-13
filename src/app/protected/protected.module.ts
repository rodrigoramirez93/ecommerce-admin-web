import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { UserPage } from './user.page';

import { ManagmentComponent } from './components/managment/managment.component';

import { AddUserComponent } from './components/managment/user/add-user/add-user.component';
import { DeleteUserComponent } from './components/managment/user/delete-user/delete-user.component';
import { GetUserComponent } from './components/managment/user/get-user/get-user.component';
import { UpdateUserComponent } from './components/managment/user/update-user/update-user.component';

import { AddRoleComponent } from './components/managment/role/add-role/add-role.component';
import { GetRoleComponent } from './components/managment/role/get-role/get-role.component';
import { DeleteRoleComponent } from './components/managment/role/delete-role/delete-role.component';
import { UpdateRoleComponent } from './components/managment/role/update-role/update-role.component';

@NgModule({
  declarations: [
    UserPage,
    ManagmentComponent,  
      
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
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
