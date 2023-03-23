import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/oidc/_services';
import { UserService } from 'src/app/_services/rest/user/user.service';

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login: boolean = false;

  constructor(
    private readonly _httpAuth: AuthService,
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
    console.log('yeet');
    await this._httpAuth.completeLogout();
    this.login = this._httpAuth.isLoggedIn();
    this._router.navigate(['/']);
  }
}
