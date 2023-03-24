import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/_interfaces/rest/transaction';
import { RestService } from '../rest.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly baseUrl = 'transaction';

  constructor(private restService: RestService) {}

  public getTransactions(accId: number): Observable<Transaction[]> {
    return this.restService.get(this.baseUrl + '/' + accId);
  }

  public putTransaction(transaction: Transaction): Observable<any> {
    return this.restService.put(this.baseUrl, transaction);
  }

  public getTransactionPage(accId: number, pageopt: any): Observable<any> {
    return this.restService.get(
      this.baseUrl +
        '/' +
        accId +
        '/page?page=' +
        pageopt.page +
        '&size=' +
        pageopt.size
    );
  }
}
