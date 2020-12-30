import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { UserPage } from './user.page';
import { AddUserComponent } from './/components/managment/add-user/add-user.component';
import { ManagmentComponent } from './components/managment/managment.component';
import { AddRoleComponent } from './components/managment/add-role/add-role.component';

@NgModule({
  declarations: [UserPage, AddUserComponent, ManagmentComponent, AddRoleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
