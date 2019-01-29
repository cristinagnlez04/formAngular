import { RouterModule, Routes } from '@angular/router';
import { LoginWelcomeComponent } from './login-welcome/login-welcome/login-welcome.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: LoginWelcomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });