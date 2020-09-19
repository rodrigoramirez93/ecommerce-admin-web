import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NewsComponent } from './components/news/news.component'
import { JwtAuthGuard } from '../../app/core/guards/jwt-auth.guard';
import { HomePage } from './home.page';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  { 
    path: '',
    component: HomePage,
    children: [
      { path: 'news', component: NewsComponent },
      { path: 'welcome', component: LandingComponent },
      { path: '', component: LandingComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [JwtAuthGuard]
})
export class PublicRoutingModule { }
