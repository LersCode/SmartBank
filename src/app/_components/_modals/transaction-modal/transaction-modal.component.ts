import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Country } from 'src/app/_interfaces/rest/country';
import { SBUser } from 'src/app/_interfaces/rest/user';
import { CountryService } from 'src/app/_services/rest/country/country.service';
import { TransactionService } from 'src/app/_services/rest/transaction/transaction.service';
import { UserService } from 'src/app/_services/rest/user/user.service';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss'],
})
export class TransactionModalComponent implements OnInit {
  @Input() addTransaction: boolean = false;
  @Output() addTransactionChange = new EventEmitter<boolean>();

  trnsctnFrmGrp: FormGroup = new FormGroup({
    iban: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  });

  constructor(private readonly _httpTransaction: TransactionService) {}

  ngOnInit(): void {}

  save(state: boolean) {
    if (state) {
      console.log(1);
      this._httpTransaction.putTransaction(this.trnsctnFrmGrp.value);
      state = false;
    }
    console.log(2);
    this.addTransactionChange.emit(state);
  }
}
