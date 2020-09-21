import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { UserPage } from './user.page';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';

@NgModule({
  declarations: [UserPage, AddUserComponent, RemoveUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
