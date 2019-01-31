import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-welcome',
  templateUrl: './login-welcome.component.html',
  styleUrls: ['./login-welcome.component.scss']
})
export class LoginWelcomeComponent implements OnInit {

  classEffect: string = '';
  imagePath: string = 'assets/img/img7.png';
  constructor(private render: Renderer2, private element: ElementRef) { }


  ngOnInit(): void {
    this.classEffect = 'messageWelcome';
  }


}
