import { Injectable } from '@angular/core';
import {
  SignoutResponse,
  User,
  UserManager,
  WebStorageStateStore,
} from 'oidc-client';
import { UserManagerSettings } from '../../_models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserDefined: boolean = false;
  private _user: User | null = null;
  // @ts-ignore
  private _userManager: UserManager;

  isLoggedIn(): boolean {
    return this._user != null && !this._user.expired;
  }

  getAccessToken(): string {
    return this._user ? this._user.access_token : '';
  }

  getClaims(): any {
    return this._user?.profile;
  }

  startAuthentication(): Promise<void> {
    this.getUsermanager();
    return this._userManager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    this.getUsermanager();
    return this._userManager.signinRedirectCallback().then((user) => {
      this._user = user;
      this.isUserDefined = true;
    });
  }

  startLogout(): Promise<void> {
    this.getUsermanager();
    return this._userManager.signoutRedirect();
  }

  completeLogout(): Promise<SignoutResponse> {
    this.getUsermanager();
    this._user = null;
    return this._userManager.signoutRedirectCallback();
  }

  silentSignInAuthentication(): Promise<User | undefined> {
    this.getUsermanager();
    return this._userManager.signinSilentCallback();
  }

  private getUsermanager() {
    if (this._userManager) return;

    const userManagerSettings: UserManagerSettings = new UserManagerSettings();
    // set up settings
    userManagerSettings.authority = 'http://localhost:9081/realms/threebit'; //website that is responsible for authorization
    userManagerSettings.client_id = 'web_app'; //unique name to identify the project
    userManagerSettings.response_type = 'code'; //desired autorization processing flow - for angular it's suitable code flow
    userManagerSettings.scope = 'profile'; // specify the access privileges, specifies the information returned about the authenticated user
    // Standard Scopes: openid, profile

    userManagerSettings.redirect_uri = 'http://localhost:4200/login-callback'; //start login process
    userManagerSettings.post_logout_redirect_uri =
      'http://localhost:4200/logout-callback'; //start logout process

    userManagerSettings.automaticSilentRenew = true;
    userManagerSettings.silent_redirect_uri =
      'https://localhost:4200/silent-callback.html'; //silent renew oidc doing it automatically

    userManagerSettings.userStore = new WebStorageStateStore({
      store: window.localStorage,
    }); //store user data in local storage

    this._userManager = new UserManager(userManagerSettings);
    this._userManager.getUser().then((user) => {
      console.log(user);
      this._user = user;
      this.isUserDefined = true;
    });
  }
}
