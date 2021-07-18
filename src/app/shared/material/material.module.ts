import { NgModule } from '@angular/core';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabsModule } from '@angular/material/tabs';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle, MatCardActions } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCell, MatCellDef, MatColumnDef, MatFooterCellDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule
  ],
  exports: 
    [MatCard, MatCardTitle, MatCardContent,
    MatCardSubtitle, MatCardHeader, MatIconModule,
    MatLabel, MatFormField,
    MatInput, MatButton, MatTab, 
    MatTabNav, MatTabLink, MatError, MatAccordion,
    MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelContent,
    MatExpansionPanelTitle, MatExpansionPanelDescription, MatDatepicker,
    MatTabGroup, MatCardActions, MatSelect, MatTableModule, MatExpansionModule]
})

export class MaterialModule { }

