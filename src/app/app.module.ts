import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputPasswordComponent } from './form/input-password/input-password/input-password.component';
import { InputEmailComponent } from './form/input-email/input-email/input-email.component';
import { InputEmailModule } from 'src/app/form/input-email/input-email.module';
import { InputPasswordModule } from 'src/app/form/input-password/input-password.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    InputEmailModule,
    InputPasswordModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
