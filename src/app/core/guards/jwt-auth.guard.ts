import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class JwtAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var userIsAuthenticated = this.authService.isAuthenticated();
    if (!userIsAuthenticated){
      this.router.navigate(['unauthorized']);
      return false;
    }
    return true;
  }
}