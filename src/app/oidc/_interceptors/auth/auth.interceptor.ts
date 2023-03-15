import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from '../../_services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this._authService.getAccessToken();
    const headers = request.headers.set(
      'Authorization',
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
            this._router.navigate(['/unauthorized']);
          }
        }
      )
    );
  }
}
