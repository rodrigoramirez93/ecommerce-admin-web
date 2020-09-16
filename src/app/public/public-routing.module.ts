import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NewsComponent } from './components/news/news.component'

const routes: Routes = [
  {
    path: 'home', component: LandingComponent,
  },
  {
    path: 'news', component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
