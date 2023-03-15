import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../_services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private readonly _authService: AuthService) {}

  async canActivate() {
    if (this._authService.isLoggedIn()) {
      return true;
    }
    await this._authService.startAuthentication();
    return false;
  }
}
