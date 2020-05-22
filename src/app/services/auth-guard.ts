import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable()

export class AuthGuard implements CanActivate{
  constructor(private authservice: AuthService,
              private route: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> |
  boolean {
    if (this.authservice.isAuth){
      return true;
    }
    else {
      this.route.navigate(['/auth']);
    }
  }
}
