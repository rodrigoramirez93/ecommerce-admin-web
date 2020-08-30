import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home.page';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
