import { RouterModule, Routes } from '@angular/router';
import { LoginWelcomeComponent } from './login-welcome/login-welcome/login-welcome.component';
import { LoginIndexComponent } from './login-index/login-index/login-index.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: LoginIndexComponent },
  { path: 'welcome', component: LoginWelcomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });