import {Component, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import {LoginInputType} from '../../domain/symbol/login.interface';
import {ResultState} from "@core/domain/model/result-state.model";

@Component({
  selector: 'app-login-card-form',
  templateUrl: './login-card-form.component.html',
  styleUrls: ['./login-card-form.component.scss']
})
export class LoginCardFormComponent {

  @Input() viewState!: ResultState


  form = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  })

  get email(): FormControl {
    return this.form.get('email')! as FormControl
  }

  get password(): FormControl {
    return this.form.get('password')! as FormControl
  }

  @Output() emitForm = new EventEmitter<LoginInputType>();

  constructor(private readonly fb: FormBuilder) {
  }

  login(): void {
    if (this.form.valid) {
      // @ts-ignore
      this.emitForm.emit(this.form.value);
      return;
    }
    this.form.markAllAsTouched()
  }

}
