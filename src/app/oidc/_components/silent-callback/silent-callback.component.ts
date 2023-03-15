import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services';

@Component({
  selector: 'app-silent-callback',
  template: '',
})
export class SilentCallbackComponent implements OnInit {
  constructor(private readonly _authentificationService: AuthService) {}

  ngOnInit(): void {
    this._authentificationService.silentSignInAuthentication();
  }
}
