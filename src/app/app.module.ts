import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PublicModule } from '../app/public/public.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PublicModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
