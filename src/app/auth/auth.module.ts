import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { AuthHttp } from './services/auth.http';
import {NgClass} from "@angular/common";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ComponentsModule,
    HttpClientModule,
    AuthRoutingModule,
    NgClass
  ],
  providers: [AuthHttp]
})
export class AuthModule { }
