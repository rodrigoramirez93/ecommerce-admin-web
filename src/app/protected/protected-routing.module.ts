import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { managementComponent } from './components/management/management.component';

import { AddRoleComponent } from './components/management/role/add-role/add-role.component';
import { DeleteRoleComponent } from './components/management/role/delete-role/delete-role.component';
import { GetRoleComponent } from './components/management/role/get-role/get-role.component'; 
import { UpdateRoleComponent } from './components/management/role/update-role/update-role.component';

import { AddUserComponent } from './components/management/user/add-user/add-user.component'; 
import { DeleteUserComponent } from './components/management/user/delete-user/delete-user.component'; 
import { GetUserComponent } from './components/management/user/get-user/get-user.component'; 
import { UpdateUserComponent } from './components/management/user/update-user/update-user.component'; 


const routes: Routes = 
[
  { 
    path: '', component: UserPage,
    children: 
    [
      { 
        path: 'management',  component: managementComponent, children: 
        [
          {  path: 'add-role', component: AddRoleComponent },
          {  path: 'delete-role', component: DeleteRoleComponent },
          {  path: 'get-role', component: GetRoleComponent },
          {  path: 'update-role', component: UpdateRoleComponent },

          {  path: 'add-user', component: AddUserComponent },
          {  path: 'delete-user', component: DeleteUserComponent },
          {  path: 'get-user', component: GetUserComponent },
          {  path: 'update-user', component: UpdateUserComponent }
        ]
      },
      { path: '', component: managementComponent, pathMatch: 'full' }
    ]
  },
  { path: 'user', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
