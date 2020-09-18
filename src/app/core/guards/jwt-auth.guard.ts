import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: CoreModule
})

export class JwtAuthGuard {

  constructor() { }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService, ) {}  
  
  canActivate(): boolean {
    
    var userIsAuthenticated = this.authService.isAuthenticated();

    console.log('userIsAuth', userIsAuthenticated); 

    if (!userIsAuthenticated) {
      this.router.navigate(['unauthorized']);
      return false;
    }
    else{
      this.router.navigate(['welcome']);
      return true;
    }
  }}