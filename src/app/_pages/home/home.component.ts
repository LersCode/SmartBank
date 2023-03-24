import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/oidc/_services';
import { SampleService } from 'src/app/_services/rest/sample/sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly _authService: AuthService,
    private readonly _sampleService: SampleService
  ) {}

  ngOnInit(): void {
    // console.log('ja', this._authService.isLoggedIn());

    this._sampleService.getSampleData().subscribe((res) => {
      // console.log(res);
    });

    this._sampleService.getSampleSecureData().subscribe((res) => {
      // console.log(res);
    });
  }
}
