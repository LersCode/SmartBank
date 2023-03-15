export class UserManagerSettings {
  authority: string = '';
  client_id: string = '';
  redirect_uri: string = '';
  post_logout_redirect_uri: string = '';
  response_type: string = '';
  scope: string = '';
  silent_redirect_uri: string = '';
  automaticSilentRenew: boolean = false;
  accessTokenExpiringNotificationTime: number = 0;
  filterProtocolClaims: boolean = false;
  loadUserInfo: boolean = false;
  lockSkew: number = 0;
  userStore: any;

  constructor() {}
}
