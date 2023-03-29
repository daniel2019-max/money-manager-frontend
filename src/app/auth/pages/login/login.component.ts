import { LoginPresenter } from './login.presenter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginPresenter]
})
export class LoginComponent implements OnInit {

  constructor(private readonly presenter: LoginPresenter) { }

  ngOnInit(): void {
  }

  saveToken() {
    localStorage.setItem('token', 'daniel');
  }
  getToken() {
    const token = localStorage.getItem('token');
    alert(token)
  }
}
