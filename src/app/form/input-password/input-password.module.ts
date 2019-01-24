import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputPasswordComponent } from './input-password/input-password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputPasswordComponent
  ],
  exports: [
    InputPasswordComponent
  ]
})
export class InputPasswordModule { }