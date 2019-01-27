import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWelcomeComponent } from './login-welcome/login-welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginWelcomeComponent
  ],
  exports: [
    LoginWelcomeComponent
  ]
})
export class LoginWelcomeModule { }
