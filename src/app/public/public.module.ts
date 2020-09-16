import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent  } from '../public/public.page';
import { PublicRoutingModule } from './public-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './components/landing/landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatIcon } from '@angular/material/icon';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [PublicComponent, MenuComponent, LandingComponent, LoginFormComponent, NewsComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
  ],
  exports: [PublicComponent, MenuComponent, LandingComponent, LoginFormComponent, NewsComponent]
})
export class PublicModule { }
