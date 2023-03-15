import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/oidc/_services';

@Component({
  selector: 'app-login',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly _authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this._authService.startAuthentication();
  }
}
