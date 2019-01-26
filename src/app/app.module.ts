import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputEmailModule } from 'src/app/form/input-email/input-email.module';
import { InputPasswordModule } from 'src/app/form/input-password/input-password.module';
import { HeaderLoginModule } from './form/header-login/header-login.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonLoginModule } from './form/button-login/button-login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InputEmailModule,
    InputPasswordModule,
    HeaderLoginModule,
    ButtonLoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
