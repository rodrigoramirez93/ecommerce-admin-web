import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  exports: 
    [ReactiveFormsModule, MaterialModule, SharedComponentsModule, FormsModule]
})
export class SharedModule { }
