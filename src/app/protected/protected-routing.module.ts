import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';

const routes: Routes = 
[
  { 
    path: '', component: UserPage,
    children: [
      { path: 'add', component: AddUserComponent },
      { path: 'remove', component: RemoveUserComponent },
      { path: '', component: AddUserComponent, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
