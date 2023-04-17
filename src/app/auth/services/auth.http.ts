import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginInputType } from '../domain/symbol/login.interface';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthHttp {
  private url = environment.BASE_URL + '/auth';

  constructor(private readonly http: HttpClient) { }

  login(payload: LoginInputType): Observable<any> {
    return this.http.post<any>(this.url + '/login', payload);
  }
}
