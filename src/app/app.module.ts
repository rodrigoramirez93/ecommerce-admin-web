import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { AuthComponent } from './auth/auth.page';
import { HomeComponent } from './home/home.page';
import { MenuComponent } from './home/component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AuthComponent, HomeComponent, MenuComponent]
})
export class AppModule { }
