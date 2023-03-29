import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardFormComponent } from './login-card-form/login-card-form.component';

const components = [LoginCardFormComponent]


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
