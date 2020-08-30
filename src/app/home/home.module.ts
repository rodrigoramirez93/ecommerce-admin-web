import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.page';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './component/menu/menu.component';
import { LandingComponent } from './component/landing/landing.component';
import { NewsComponent } from './component/news/news.component';

@NgModule({
  declarations: [HomeComponent, MenuComponent, LandingComponent, NewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [HomeComponent, MenuComponent]
})
export class HomeModule { }
