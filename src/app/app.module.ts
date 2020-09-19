import { NgModule } from '@angular/core';
import { App } from './app.page';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { ProtectedModule } from './protected/protected.module';
import { UserPage } from './protected/user.page';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    CoreModule,
    PublicModule,
    ProtectedModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home/welcome', pathMatch: 'full' },
      { path: 'user', redirectTo: 'user' },
      // { path: '**', redirectTo: 'home/welcome' }
    ])
  ],
  bootstrap: [App],
})
export class AppModule { }
