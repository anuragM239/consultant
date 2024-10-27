import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate{
  private loginResult = false;

  constructor(private router: Router) {}

  loginFunc(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.loginResult = true;
    } else {
      this.loginResult = false;
    }
    return this.loginResult;
  }

  canActivate(): boolean {
    if (!this.loginResult) {
      this.router.navigate(['/adminlogin']);
      return false;
    }
    return true;
  }

  logout() {
    this.loginResult = false;
  }
}

