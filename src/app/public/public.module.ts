import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent  } from '../public/public.page';
import { PublicRoutingModule } from './public-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './components/landing/landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NewsComponent } from './components/news/news.component';
import { CoreModule } from '../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PublicComponent, MenuComponent, LandingComponent, LoginFormComponent, NewsComponent],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    PublicRoutingModule,
  ],
  exports: [PublicComponent, MenuComponent, LandingComponent, LoginFormComponent, NewsComponent]
})
export class PublicModule { }
