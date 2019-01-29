import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWelcomeComponent } from './login-welcome/login-welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputEmailModule } from 'src/app/login-form/input-email/input-email.module';
import { InputPasswordModule } from 'src/app/login-form/input-password/input-password.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputEmailModule,
    InputPasswordModule
  ],
  declarations: [
    LoginWelcomeComponent
  ],
  exports: [
    LoginWelcomeComponent
  ]
})
export class LoginWelcomeModule { }
