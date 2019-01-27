import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputEmailModule } from 'src/app/login-form/input-email/input-email.module';
import { InputPasswordModule } from 'src/app/login-form/input-password/input-password.module';
import { HeaderLoginModule } from './login-form/header-login/header-login.module';
import { LoginWelcomeModule } from './login-welcome/login-welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { } from '';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    InputEmailModule,
    InputPasswordModule,
    HeaderLoginModule,
    LoginWelcomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
