import { Component, OnInit } from '@angular/core';
import { first, map, Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/app/oidc/_services';
import { Account } from 'src/app/_interfaces/account';
import { Country } from 'src/app/_interfaces/rest/country';
import { Transaction } from 'src/app/_interfaces/rest/transaction';
import { SBUser } from 'src/app/_interfaces/rest/user';
import { AccountService } from 'src/app/_services/rest/account/account.service';
import { CountryService } from 'src/app/_services/rest/country/country.service';
import { TransactionService } from 'src/app/_services/rest/transaction/transaction.service';
import { UserService } from 'src/app/_services/rest/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //
  // Vars
  //
  editUser: boolean = false;
  selected: string | undefined;
  selectedAcc$: Observable<Account | undefined> | undefined;
  user$: Observable<SBUser> = this._httpUser.getUser();
  accounts$: Observable<Account[]> = this.httpAccount.getAccounts();
  transactions$: Observable<Transaction[]> | undefined;

  countrys$: Observable<Country[]> = this._countryService.getCountrys();

  constructor(
    private readonly _httpUser: UserService,
    private readonly httpAccount: AccountService,
    private readonly httpTransactions: TransactionService,
    private readonly _countryService: CountryService
  ) {}

  ngOnInit(): void {}

  changeAccount() {
    this.selectedAcc$ = this.accounts$.pipe(
      map((accs) => accs.find((acc) => acc.iban == this.selected))
    );
    this.transactions$ = this.accounts$.pipe(
      switchMap((accs) =>
        this.httpTransactions.getTransactions(
          accs.find((acc) => acc.iban == this.selected)?.id || -1
        )
      )
    );
  }

  deleteAccount() {
    this.selectedAcc$?.pipe(first()).subscribe((acc) => {
      this.httpAccount.deleteAccount(acc?.id || -1);
    });
  }
}
