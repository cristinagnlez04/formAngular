import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoginComponent } from './button-login/button-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonLoginComponent
  ],
  exports: [
    ButtonLoginComponent
  ]
})
export class ButtonLoginModule { }
