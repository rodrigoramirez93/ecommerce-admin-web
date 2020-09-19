import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NewsComponent } from './components/news/news.component'
import { JwtAuthGuard } from '../../app/core/guards/jwt-auth.guard';
import { UserPage } from '../protected/user.page';
import { JwtModule } from '@auth0/angular-jwt';
import { HomePage } from './home.page';

const routes: Routes = [

  { path: 'home',
    component: HomePage,
    children: [
      { path: '', component: LandingComponent },
      { path: 'news', component: NewsComponent }
    ],
    loadChildren: ()=> import('../public/public.module').then(m => m.PublicModule)
  }
  // { path: 'home/welcome', component: LandingComponent },
  // { path: 'home/news', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [JwtAuthGuard]
})
export class PublicRoutingModule { }
