import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services';

@Component({
  selector: 'login-callback',
  template: '',
})
export class LoginCallbackComponent implements OnInit {
  constructor(
    private readonly _authentificationService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._authentificationService.completeAuthentication();

    this._router.navigate(['home']);
  }
}
