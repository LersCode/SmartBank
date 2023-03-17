# Login

We will use the npm package [oidc-client](https://www.npmjs.com/package/oidc-client) to implement the login (incl. SSO).
You can find a tutorial [here](https://medium.com/geekculture/authentication-flow-in-angular-93bd79080908).

> Note: The tutorial is a little bit outdated. You will need to have a look at the repository of the package tutorial to get the latest version of the code.

## Install packages

```
npm install oidc-client
```

## Create Authentification Service

1. Create service `ng g s oidc/_services/auth`

## Create Auth models

1. Create model `src/app/oidc/_models/auth-client-settings.ts`

```typescript
export class UserManagerSettings {
  // @ts-ignore
  authority: string;
  // @ts-ignore
  client_id: string;
  // @ts-ignore
  redirect_uri: string;
  // @ts-ignore
  post_logout_redirect_uri: string;
  // @ts-ignore
  response_type: string;
  // @ts-ignore
  scope: string;
  // @ts-ignore
  silent_redirect_uri: string;
  // @ts-ignore
  automaticSilentRenew: boolean;
  // @ts-ignore
  accessTokenExpiringNotificationTime: number;
  // @ts-ignore
  filterProtocolClaims: boolean;
  // @ts-ignore
  loadUserInfo: boolean;
  // @ts-ignore
  lockSkew: number;
  userStore: any;
}
```

## Create necessary components

1. Create component `ng g c oidc/_components/login-callback -s=true -t=true`
2. Create component `ng g c oidc/_components/logout-callback -s=true -t=true`s
3. Create component `ng g c oidc/_components/silent-callback -s=true -t=true`

## Create necessary routes

1. Open `app-routing.module.ts`
2. paste routes

```typescript
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    children: [{ path: "", component: DashboardComponent }],
  },
  { path: "login-callback", component: LoginCallbackComponent },
  { path: "logout-callback", component: LogoutCallbackComponent },
  { path: "silent-callback", component: SilentCallbackComponent },
  { path: "**", redirectTo: "/home" },
];
```

## Create AuthGuard

1. Create service `ng g g oidc/_guards/auth`
   > Note: On generate choose `CanActivate`.

## Create AuthInterceptor

1. Create service `ng g interceptor oidc/_interceptors/auth`

## Create index.ts

Create `index.ts` for all oidc subfolders. In the root-folder create `ng-auth.module.ts` with code:

```typescript
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  LoginCallbackComponent,
  LogoutCallbackComponent,
  SilentCallbackComponent,
} from "./_components";
import { AuthGuard } from "./_guards";
import { AuthService } from "./_services";
import { AuthInterceptor } from "./_interceptors";

@NgModule({
  declarations: [
    LoginCallbackComponent,
    LogoutCallbackComponent,
    SilentCallbackComponent,
  ],
  imports: [],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
  ],
  exports: [
    LoginCallbackComponent,
    LogoutCallbackComponent,
    SilentCallbackComponent,
  ],
})
export class NgAuthModule {}
```

## Finished 🏁
