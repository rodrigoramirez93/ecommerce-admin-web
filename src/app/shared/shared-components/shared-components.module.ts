import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { AuthBannerComponent } from './auth-banner/auth-banner.component';


@NgModule({
  declarations: [MenuComponent, SpinnerLoaderComponent, AuthBannerComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  exports: [MenuComponent, SpinnerLoaderComponent, AuthBannerComponent]
})
export class SharedComponentsModule { }
