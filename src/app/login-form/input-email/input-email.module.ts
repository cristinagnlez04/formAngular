import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputEmailComponent } from './input-email/input-email.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputEmailComponent
  ],
  exports: [
    InputEmailComponent
  ]
})
export class InputEmailModule { }