import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { ManagmentComponent } from './components/managment/managment.component'
import { AddRoleComponent } from './components/managment/add-role/add-role.component';
import { AddUserComponent } from './components/managment/add-user/add-user.component';

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
          {  path: 'add-user', component: AddUserComponent }
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
