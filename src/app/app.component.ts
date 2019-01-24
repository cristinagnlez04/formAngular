import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  formInputEmail: FormGroup;
  formInputPassword: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formInputEmail = new FormGroup({
      'email': new FormControl({ value: '', disabled: false },
        [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z09.-]+\.[a-z]{2,3}$')
        ])

    });
  }
}
