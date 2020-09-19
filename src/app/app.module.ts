import { NgModule } from '@angular/core';
import { App } from './app.page';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { ProtectedModule } from './protected/protected.module';
import { UserPage } from './protected/user.page';
import { CoreModule } from './core/core.module';
import { JwtAuthGuard } from './core/guards/jwt-auth.guard';
import { UnauthorizedComponent } from './public/components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './public/components/not-found/not-found.component';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    CoreModule,
    RouterModule.forRoot([
      { path: 'home', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
      { path: 'user', loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule), canActivate: [JwtAuthGuard] },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'unauthorized', component: UnauthorizedComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: '/not-found' }
    ])
  ],
  bootstrap: [App],
})
export class AppModule { }
