import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-welcome',
  templateUrl: './login-welcome.component.html',
  styleUrls: ['./login-welcome.component.scss']
})
export class LoginWelcomeComponent {

  formLogin: FormGroup;
  value: any;
  constructor() {

    this.formLogin = new FormGroup({
      'email': new FormControl({ value: '', disabled: false },
        [Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z09.-]+\.[a-z]{2,3}$')
        ]),
      'password': new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(4)])
    });
  }

  saveLogin() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
    }
    else {
      console.log("ERROR");
    }
  }

}
