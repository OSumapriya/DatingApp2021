import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accontServide: AccountService, private toastr:ToastrService){}
  canActivate(): Observable<boolean> {
    return this.accontServide.currentUser$.pipe(
      map(user=>{
        if(user) return true;
        this.toastr.error("You shall not pass!");   
      })
    )
  }
  
}
