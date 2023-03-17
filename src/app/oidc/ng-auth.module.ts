import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  LoginCallbackComponent,
  LogoutCallbackComponent,
  SilentCallbackComponent,
} from './_components';
import { AuthGuard } from './_guards';
import { AuthService } from './_services';
import { AuthInterceptor } from './_interceptors';

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
