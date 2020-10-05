import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsGuard implements CanActivate {

  //true for access to car-details and will change 
    //(navigation)nav-item to (logout)
  public isLoggedIn: boolean = false;

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
