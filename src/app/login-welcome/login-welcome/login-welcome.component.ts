import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-welcome',
  templateUrl: './login-welcome.component.html',
  styleUrls: ['./login-welcome.component.scss']
})

export class LoginWelcomeComponent implements OnInit {
  emailValue: string = '';
  classEffect: string = '';
  imagePath: string = 'assets/img/img2.png';
  constructor(private render: Renderer2, private element: ElementRef, private _activeRoute: ActivatedRoute) {
    this._activeRoute.params.subscribe((data: any) => {
      this.emailValue = data.email;
    });
  }

  ngOnInit(): void {
    this.classEffect = 'messageWelcome';
  }

  getData(email: string) {
    this.emailValue = email;
  }

}
