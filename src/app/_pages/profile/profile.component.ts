import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { first, map, Observable, Subscription, switchMap } from 'rxjs';
import { Country } from 'src/app/_interfaces/rest/country';
import { Transaction } from 'src/app/_interfaces/rest/transaction';
import { SBUser } from 'src/app/_interfaces/rest/user';
import { CountryService } from 'src/app/_services/rest/country/country.service';
import { TransactionService } from 'src/app/_services/rest/transaction/transaction.service';
import { UserService } from 'src/app/_services/rest/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', [Validators.required]),
    country: new FormControl<Country>(
      {
        id: -1,
        isoCode: '',
        name: '',
      },
      [Validators.required]
    ),
  });

  countrys: Country[] | null = null;
  countrySubscription = this._countryService
    .getCountrys()
    .subscribe((c) => (this.countrys = c.sort()));

  user: SBUser | null = null;
  userSubscription: Subscription = this._userService
    .getUser()
    .subscribe((u) => {
      this.user = u;
      // this.userForm.patchValue(u);
      this.userForm.setValue({
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.emailAddress,
        birthday: u.dateOfBirth,
        country: u.country?.name || '',
      });
      return u;
    });

  constructor(
    private readonly _countryService: CountryService,
    private readonly _userService: UserService,
    private readonly _transactionService: TransactionService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.countrySubscription.unsubscribe();
  }

  updateUser() {
    if (!this.userForm.valid) return;

    const country = this.countrys?.find(
      (c) => c.name == this.userForm.value.country
    );

    this._userService
      .putUser({
        id: this.user?.id || '-1',
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        emailAddress: this.userForm.value.email,
        dateOfBirth: this.userForm.value.birthday,
        // country: country || { id: -1, isoCode: '', name: '' },
        country: country || { id: -1, isoCode: '', name: '' },
      })
      .subscribe((res) => (this.user = res));
  }

  pageLength = 100;
  pageSize = 10;

  transactions$: Observable<Transaction[]> | null = null; 
  
  this.transactions$ = this._transactionService
    .getTransactionPage(4, {
      page: 0,
      size: 10,
    })
    .pipe(
      map((t) => {
        console.log(t);
        this.pageLength = t.totalElements;
        return t.content;
      })
    )
    .subscribe();

  handlePageEvent(event: PageEvent) {
    this.transactions$ = this._transactionService
    .getTransactionPage(4, {
      page: 0,
      size: 10,
    })
    .pipe(
      switchMap((t) => {
        console.log(t);
        this.pageLength = t.totalElements;
        return t.content;
      })
    )
    .subscribe();
  }
}
