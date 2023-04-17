import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoanCardComponent} from './loan-card/loan-card.component';


const components = [LoanCardComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class ComponentsModule {
}
