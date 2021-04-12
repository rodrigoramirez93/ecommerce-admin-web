import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { ManagmentComponent } from './components/managment/managment.component';

import { AddRoleComponent } from './components/managment/role/add-role/add-role.component';
import { DeleteRoleComponent } from './components/managment/role/delete-role/delete-role.component';
import { GetRoleComponent } from './components/managment/role/get-role/get-role.component'; 
import { UpdateRoleComponent } from './components/managment/role/update-role/update-role.component';

import { AddUserComponent } from './components/managment/user/add-user/add-user.component'; 
import { DeleteUserComponent } from './components/managment/user/delete-user/delete-user.component'; 
import { GetUserComponent } from './components/managment/user/get-user/get-user.component'; 
import { UpdateUserComponent } from './components/managment/user/update-user/update-user.component'; 


const routes: Routes = 
[
  { 
    path: '', component: UserPage,
    children: 
    [
      { 
        path: 'managment',  component: ManagmentComponent, children: 
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
      { path: '', component: ManagmentComponent, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
