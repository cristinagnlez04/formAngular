import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputPasswordComponent } from './form/input-password/input-password/input-password.component';
import { InputEmailComponent } from './form/input-email/input-email/input-email.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPasswordComponent,
    InputEmailComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
