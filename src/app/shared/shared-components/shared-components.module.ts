import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  exports: [MenuComponent]
})
export class SharedComponentsModule { }
