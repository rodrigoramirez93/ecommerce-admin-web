import { NgModule } from '@angular/core';
import { ProtectedRoutingModule } from './protected-routing.module';
import { UserPage } from './user.page';

@NgModule({
  declarations: [UserPage],
  imports: [
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
