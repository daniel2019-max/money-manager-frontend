import { AuthHttp } from './../../services/auth.http';
import { LoginInputType } from './../../domain/symbol/login.interface';
import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ResultState } from 'src/app/core/domain/model/result-state.model';

@Injectable()
export class LoginPresenter {

  viewState = new ResultState();

  destroy$ = new Subject();
  // constructor(private authHttp: AuthHttp) { }

  // login(payload: LoginInputType) {
  //   this.viewState.loadingState()
  //   this.authHttp.login(payload)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe((response) => {
  //       console.log(response)
  //     })
  // }
}
