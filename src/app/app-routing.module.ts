import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LoginCallbackComponent,
  LogoutCallbackComponent,
  SilentCallbackComponent,
} from './oidc/_components';
import { AuthGuard } from './oidc/_guards/auth/auth.guard';
import { HomeComponent } from './_pages/home/home.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [{ path: '', component: DashboardComponent }],
  },
  { path: 'login-callback', component: LoginCallbackComponent },
  { path: 'logout-callback', component: LogoutCallbackComponent },
  { path: 'silent-callback', component: SilentCallbackComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
