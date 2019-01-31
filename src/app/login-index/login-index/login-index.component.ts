import { Component, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss'],
})

export class LoginIndexComponent {
  formLogin: FormGroup;
  value: any;

  constructor(private render: Renderer2, private element: ElementRef, private _router: Router) {

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
      this.render.removeClass(this.element.nativeElement, 'disabledButton');
      this._router.navigate(['/welcome/', this.formLogin.controls['email'].value]);
    }
    else {
      console.log("ERROR");
      this.render.addClass(this.element.nativeElement, 'disabledButton');
    }
  }

}
