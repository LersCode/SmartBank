import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_modules/material.module';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './_pages/home/home.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { DashboardCardComponent } from './_components/dashboard-card/dashboard-card.component';
import { NgAuthModule } from './oidc/ng-auth.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModalComponent } from './_components/_modals/user-modal/user-modal.component';
import { TransactionModalComponent } from './_components/_modals/transaction-modal/transaction-modal.component';
import { ProfileComponent } from './_pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardCardComponent,
    UserModalComponent,
    TransactionModalComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
