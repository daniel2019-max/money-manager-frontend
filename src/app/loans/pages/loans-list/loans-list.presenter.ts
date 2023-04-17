import {Injectable} from '@angular/core';
import {LoanHttp} from "@loans/services/loan.http";
import {ResultState} from "@core/domain/model/result-state.model";
import {DebtorBalanceType} from "@loans/domain/symbol/debtor-balance.type";
import {Subject, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoansListPresenter {

  loansState = new ResultState<DebtorBalanceType[]>()
  destroy = new Subject();

  constructor(private readonly loanHttp: LoanHttp) {
  }

  run(): void {
    this.loansState.loadingState()

  }

  getLoans(): void {
    this.loanHttp.getLoans()
      .pipe(takeUntil(this.destroy))
      .subscribe((response) => {
        this.loansState.successState(response.data)
      })
  }
}
