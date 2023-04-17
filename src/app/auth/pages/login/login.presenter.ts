import {AuthHttp} from '@auth/services/auth.http';
import {LoginInputType} from '@auth/domain/symbol/login.interface';
import {Injectable} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {ResultState} from 'src/app/core/domain/model/result-state.model';

@Injectable()
export class LoginPresenter {

  viewState = new ResultState<any, { msg: string }>();

  destroy$ = new Subject();

  constructor(private readonly authHttp: AuthHttp) {
  }

  login(payload: LoginInputType) {
    this.viewState.loadingState()
    this.authHttp.login(payload)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log(response)
      })
  }
}
