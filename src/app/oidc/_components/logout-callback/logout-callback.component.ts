import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services';

@Component({
  selector: 'logout-callback',
  template: '',
})
export class LogoutCallbackComponent implements OnInit {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit() {
    this._authService.completeLogout();

    this._router.navigate(['dashboard']);
  }
}
