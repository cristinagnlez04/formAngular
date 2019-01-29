import { Component, Input, forwardRef, Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input-email',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputEmailComponent),
    multi: true
  }],
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})


export class InputEmailComponent implements ControlValueAccessor {
  blur: any;
  focus: any;
  @Input() disabled: boolean;

  innerValue: any = '';
  onChangeFn = (_: any) => { };

  constructor(private render: Renderer2, private element: ElementRef) { }

  onFocus(event) {
    console.log("ON FOCUS");
    this.focus = event;
    if (this.focus) {
      this.render.addClass(this.element.nativeElement, 'effect');
      console.log("ENTRA!!!!");
    } else {
      this.render.removeClass(this.element.nativeElement, 'effect');

      console.log("NO HACE NADA");
    }
  }

  onBlur(event) {
    this.blur = event;
    if (this.blur) {
      console.log("BLUR!!!");
    } else {
      console.log("BLUR - NO HACE NADA");
    }
  }

  onEmailChange(value) {
    this.onChangeFn(value);
    this.innerValue = value;
    console.log('input email ', value);
  }

  writeValue(value: any): void {
    this.innerValue = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.render.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    if (isDisabled) {
      this.render.addClass(this.element.nativeElement, 'bci-disabled');
    } else {
      this.render.removeClass(this.element.nativeElement, 'bci-disabled');
    }
  }

}
