import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../simple-pages/login-page/_service/authentication.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
  auth: boolean;
  constructor(
    private authS: AuthenticationService,
    private router: Router,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    this.authS.currentUser.subscribe(v => {
      if (!v) {
        this.router.navigate(['/notAuth'], {
          queryParams: {
            auth: false
          }
        });
        return this.auth = false;

      }else {
        return this.auth = v.success;
      }
    });
    if ( this.auth ){
    return true;
    } else {
      return false;
    }

  }
}
