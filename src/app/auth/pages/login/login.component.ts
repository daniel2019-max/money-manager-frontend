import {LoginPresenter} from './login.presenter';
import {Component, OnInit} from '@angular/core';
import {LoginInputType} from "@auth/domain/symbol/login.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginPresenter]
})
export class LoginComponent {
  viewState$ = this.presenter.viewState;


  constructor(private readonly presenter: LoginPresenter) {
  }

  submitForm(form: LoginInputType): void {
    this.presenter.login(form);
  }

  closeModal(){
    console.log('close modal')
  }

}
