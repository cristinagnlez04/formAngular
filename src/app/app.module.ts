import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderLoginModule } from './login-form/header-login/header-login.module';
import { LoginWelcomeModule } from './login-welcome/login-welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeaderLoginModule,
    LoginWelcomeModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
