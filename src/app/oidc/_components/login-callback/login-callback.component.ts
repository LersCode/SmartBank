import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services';

@Component({
  selector: 'login-callback',
  template: '',
})
export class LoginCallbackComponent implements OnInit {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  async ngOnInit() {
    await this._authService.completeAuthentication();

    this._router.navigate(['dashboard']);
  }
}
