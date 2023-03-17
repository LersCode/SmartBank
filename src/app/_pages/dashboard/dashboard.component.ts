import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/oidc/_services';

@Component({
  selector: 'app-login',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //
  // Vars
  //
  activities: any[] = [
    {
      name: 'Activity 1',
      iban: 'NL01ABNA0123456789',
      amount: 100,
    },
    {
      name: 'Activity 2',
      iban: 'NL01ABNA0123456789',
      amount: 100,
    },
    {
      name: 'Activity 3',
      iban: 'NL01ABNA0123456789',
      amount: 100,
    },
    {
      name: 'Activity 4',
      iban: 'NL01ABNA0123456789',
      amount: 100,
    },
  ];

  constructor(private readonly _authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this._authService.startAuthentication();
  }
}
