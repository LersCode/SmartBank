import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './oidc/_guards/auth/auth.guard';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-callback', component: LoginComponent },
  { path: 'logout-callback', component: LoginComponent },
  { path: 'silent-callback', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
