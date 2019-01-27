import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLoginComponent } from './header-login/header-login.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderLoginComponent
  ],
  exports: [
    HeaderLoginComponent
  ]
})
export class HeaderLoginModule { }
