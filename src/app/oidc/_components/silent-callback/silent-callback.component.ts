import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services';

@Component({
  selector: 'silent-callback',
  template: '',
})
export class SilentCallbackComponent implements OnInit {
  constructor(private readonly _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.silentSignInAuthentication();
  }
}
