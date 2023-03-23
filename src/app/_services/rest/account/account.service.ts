import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/_interfaces/account';
import { RestService } from '../rest.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly baseUrl = 'account';

  constructor(private restService: RestService) {}

  public getAccounts(): Observable<Account[]> {
    return this.restService.get(this.baseUrl);
  }

  public postAccount(account: Account): Observable<any> {
    return this.restService.post(this.baseUrl, account);
  }

  public deleteAccount(accId: number): Observable<any> {
    return this.restService.delete(this.baseUrl + '/' + accId);
  }
}
