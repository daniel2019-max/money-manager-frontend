import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardFormComponent } from './login-card-form/login-card-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ModalLoadingComponent } from './modal-loading/modal-loading.component';

const components = [LoginCardFormComponent]


@NgModule({
  declarations: [
    ...components,
    ModalLoadingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
