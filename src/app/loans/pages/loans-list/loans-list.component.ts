import {Component, OnInit} from '@angular/core';
import {LoansListPresenter} from "@loans/pages/loans-list/loans-list.presenter";

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
  providers: [LoansListPresenter]
})
export class LoansListComponent implements OnInit {
  // loans$ = this.presenter.loansState

  constructor(private readonly presenter: LoansListPresenter) {
  }

  ngOnInit(): void {
    //   this.presenter.run()
  }

}
