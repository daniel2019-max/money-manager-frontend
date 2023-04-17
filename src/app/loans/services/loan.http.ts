import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageType} from "@core/domain/symbol/response-http.interface";
import {DebtorBalanceType} from "@loans/domain/symbol/debtor-balance.type";

@Injectable({
  providedIn: 'root'
})
export class LoanHttp {

  private url = `${environment.BASE_URL}/loans`

  constructor(private readonly http: HttpClient) {
  }

  getLoans(): Observable<PageType<DebtorBalanceType>> {
    return this.http.get<PageType<DebtorBalanceType>>(`${this.url}`)
  }
}
