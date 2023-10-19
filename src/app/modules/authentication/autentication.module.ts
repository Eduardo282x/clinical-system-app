import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RecuperarComponent } from './recuperar/recuperar.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class AuthentiationModule { }
