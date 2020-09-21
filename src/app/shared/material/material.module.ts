import { NgModule } from '@angular/core';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabLink, MatTabNav, MatTabsModule } from '@angular/material/tabs';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: 
    [MatCard, MatCardTitle, MatCardContent,
    MatCardSubtitle, MatCardHeader, MatIcon,
    MatLabel, MatFormField,
    MatInput, MatButton, MatTab, 
    MatTabNav, MatTabLink, MatError]
})

export class MaterialModule { }

