import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
