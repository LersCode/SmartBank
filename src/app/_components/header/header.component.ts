import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/oidc/_services';

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login: boolean = false;

  constructor(
    public _httpAuth: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.login = this._httpAuth.isLoggedIn();
  }

  async doLogin() {
    await this._httpAuth.startAuthentication();
    this.login = this._httpAuth.isLoggedIn();
  }

  async doLogout() {
    await this._httpAuth.completeLogout();
    this.login = this._httpAuth.isLoggedIn();
    this._router.navigate(['/']);
  }
}
