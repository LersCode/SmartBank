# Login

## Install packages

```
npm install oidc-client
```

## Create Authentification Service

1. Create service `ng g s oicd/_services/auth`
2. paste code

```typescript
// paste authentification.service.ts here ---
```

## Create necessary components

1. Create component `ng g c oicd/_components/login-callback -s=true -t=true`
2. paste code

```typescript
// paste login-callback.component.ts here ---
```

3. Create component `ng g c oicd/_components/logout-callback -s=true -t=true`
4. paste code

```typescript
// paste logout-callback.component.ts here ---
```

5. Create component `ng g c oicd/_components/silent-callback -s=true -t=true`
6. paste code

```typescript
// paste silent-callback.component.ts here ---
```

## Create necessary routes

1. Open `app-routing.module.ts`
2. paste code

```typescript
{ path: 'home', canActivate: [AuthGuard], component: HomeComponent },
{ path: 'login-callback', component: LoginComponent },
{ path: 'logout-callback', component: LoginComponent },
{ path: 'silent-callback', component: LoginComponent },
```

## Create AuthGuard

1. Create service `ng g g oicd/_guards/auth`
   > Note: On generate choose `CanActivate`.
2. paste code

```typescript
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthentificationService } from "../_services/authentification.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private readonly _authService: AuthentificationService) {}

  async canActivate() {
    if (this._authService.isLoggedIn()) {
      return true;
    }
    await this._authService.startAuthentication();
    return false;
  }
}
```

## Create AuthInterceptor

1. Create service `ng g interceptor oicd/_interceptors/auth`
2. paste code

```typescript
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly _authService: AuthentificationService,
    private readonly _router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this._authService.getAccessToken();
    const headers = request.headers.set(
      "Authorization",
      `Bearer ${accessToken}`
    );
    const authReq = request.clone({ headers });

    return next.handle(authReq).pipe(
      tap(
        () => {},
        (err) => {
          const respError = err as HttpErrorResponse;
          if (
            respError &&
            (respError.status === 401 || respError.status === 403)
          ) {
            debugger;
            this._router.navigate(["/unauthorized"]);
          }
        }
      )
    );
  }
}
```

## Finished 🏁
