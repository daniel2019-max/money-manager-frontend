import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoansRoutingModule} from './loans-routing.module';
import {LoansListComponent} from './pages/loans-list/loans-list.component';
import {ComponentsModule} from "@loans/components/components.module";
import {LoanHttp} from "@loans/services/loan.http";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    LoansListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    LoansRoutingModule
  ],
  providers:[LoanHttp]
})
export class LoansModule {
}
