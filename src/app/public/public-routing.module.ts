import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NewsComponent } from './components/news/news.component'
import { JwtAuthGuard } from '../../app/core/guards/jwt-auth.guard';
import { UserPage } from '../protected/user.page';
import { JwtModule } from '@auth0/angular-jwt';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'news', component: NewsComponent },
  { path: 'welcome', 
    component: UserPage,
    loadChildren: ()=> import('../protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [JwtAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [JwtAuthGuard]
})
export class PublicRoutingModule { }
