import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoansListComponent} from "@loans/pages/loans-list/loans-list.component";

const routes: Routes = [
  {
    path: '',
    component: LoansListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule {
}
