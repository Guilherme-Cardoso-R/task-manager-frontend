import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Armazene o role após o login

    if (token && userRole === 'Admin') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
