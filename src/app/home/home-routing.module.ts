import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { NewsComponent } from './component/news/news.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
  },
  {
    path: 'home', component: LandingComponent,
  },
  {
    path: 'news', component: NewsComponent,
  },
  {
    path: '**', component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
