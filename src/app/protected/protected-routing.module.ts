import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { JwtHeaderSetterInterceptor } from '../core/Interceptors/jwt-header-setter.interceptor';
import { UserPage } from './user.page';

const routes: Routes = [
  { path: 'user', 
    component: UserPage,
    loadChildren: ()=> import('../protected/protected.module').then(m => m.ProtectedModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
