import { NgModule } from '@angular/core';
import { HomePage  } from './home.page';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './components/landing/landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NewsComponent } from './components/news/news.component';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [HomePage, LandingComponent, LoginFormComponent, NewsComponent, UnauthorizedComponent, NotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,
  ],
  exports: [HomePage, LandingComponent, LoginFormComponent, NewsComponent]
})
export class PublicModule { }
