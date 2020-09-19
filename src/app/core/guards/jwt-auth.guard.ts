import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Router, CanActivate, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JwtAuthGuard {

  constructor() { }
}

@Injectable()
export class AuthGuardService implements CanLoad {
  constructor(private router: Router, private authService: AuthService, ) {}  
  
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  
  navigateTo(route, guardAllow) : boolean{
    this.router.navigate(route);
    return guardAllow;
  }

  canActivate(): boolean {
    var userIsAuthenticated = this.authService.isAuthenticated();
    return userIsAuthenticated? this.navigateTo('user', true) : this.navigateTo('unauthorized', false);
  }}