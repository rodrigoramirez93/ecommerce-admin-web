import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { ManagmentComponent } from './components/managment/managment.component';
import { HomePage } from '../public/home.page';

const routes: Routes = 
[
  { 
    path: '', component: UserPage,
    children: [
      { path: 'managment', component: ManagmentComponent },
      { path: '', component: ManagmentComponent, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
