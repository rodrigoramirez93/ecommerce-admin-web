import { NgModule } from '@angular/core';
import { PublicComponent  } from '../public/public.page';
import { PublicRoutingModule } from './public-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './components/landing/landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NewsComponent } from './components/news/news.component';
import { CoreModule } from '../core/core.module';
import { ProtectedModule } from '../protected/protected.module';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';

@NgModule({
  declarations: [PublicComponent, MenuComponent, LandingComponent, LoginFormComponent, NewsComponent],
  imports: [
    CoreModule,
    SharedModule,
    ProtectedModule,
    PublicRoutingModule,
  ],
  exports: [PublicComponent, MenuComponent, LandingComponent, LoginFormComponent, NewsComponent]
})
export class PublicModule { }
