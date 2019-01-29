import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputEmailModule } from 'src/app/login-form/input-email/input-email.module';
import { InputPasswordModule } from 'src/app/login-form/input-password/input-password.module';
import { LoginIndexComponent } from './login-index/login-index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputEmailModule,
    InputPasswordModule
  ], declarations: [
    LoginIndexComponent
  ],
  exports: [
    LoginIndexComponent
  ]

})
export class LoginIndexModule { }
