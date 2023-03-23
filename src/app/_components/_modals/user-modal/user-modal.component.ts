import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Country } from 'src/app/_interfaces/rest/country';
import { SBUser } from 'src/app/_interfaces/rest/user';
import { CountryService } from 'src/app/_services/rest/country/country.service';
import { UserService } from 'src/app/_services/rest/user/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  @Input() user: SBUser | null = null;

  @Input() editUser: boolean = false;
  @Output() editUserChange = new EventEmitter<boolean>();

  usrFrmGrp: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  countrys$ = this._httpCountry.getCountrys().pipe(
    map((countrys) => {
      this.usrFrmGrp.get('firstName')?.setValue(this.user?.firstName || '');
      this.usrFrmGrp.get('lastName')?.setValue(this.user?.lastName || '');
      this.usrFrmGrp.get('email')?.setValue(this.user?.emailAddress || '');
      this.usrFrmGrp.get('dateOfBirth')?.setValue(this.user?.dateOfBirth || '');
      this.usrFrmGrp.get('country')?.setValue(this.user?.country || '');
      // sort by name
      return countrys.sort((a: Country, b: Country) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    })
  );

  constructor(
    private readonly _httpCountry: CountryService,
    private readonly _httpUser: UserService
  ) {}

  ngOnInit(): void {}

  save(state: boolean) {
    if (state) {
      console.log(1);
      this._httpUser
        .putUser({
          id: this.user?.id || '',
          firstName: this.usrFrmGrp.get('firstName')?.value,
          lastName: this.usrFrmGrp.get('lastName')?.value,
          emailAddress: this.usrFrmGrp.get('email')?.value,
          dateOfBirth: this.usrFrmGrp.get('dateOfBirth')?.value,
          country: this.usrFrmGrp.get('country')?.value,
        })
        .subscribe();
      state = false;
    }
    console.log(2);
    this.editUserChange.emit(state);
  }
}
