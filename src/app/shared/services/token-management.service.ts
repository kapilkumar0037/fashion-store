import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenManagementService {
  token = '';
  tokenKey = 'auth_token';
  router = inject(Router);

  setToken(token: string) {
    sessionStorage.setItem(this.tokenKey, token);
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
  clearToken() {
    this.token = '';
    sessionStorage.removeItem(this.tokenKey);
  }

  get isAuthenticated(): boolean {
    return this.token !== '';
  }

  logout() {
    this.clearToken();
    // Additional logout logic can be added here, such as redirecting to a login page.
    this.router.navigate(['/login']);
  }
}
