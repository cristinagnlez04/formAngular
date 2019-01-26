
import { Component, Input, forwardRef, Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input-password',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputPasswordComponent),
    multi: true
  }],
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})

export class InputPasswordComponent implements ControlValueAccessor {
  @Input() disabled: boolean;

  innerValue: any = '';
  onChangeFn = (_: any) => { };
  onTouched = () => { };

  constructor(private render: Renderer2, private element: ElementRef) { }

  onPasswordChange(value) {
    this.onChangeFn(value);
    this.innerValue = value;
    console.log('input password ', value);
  }

  writeValue(value: any): void {
    this.innerValue = value || '';

    if (value) {
      this.render.addClass(this.element.nativeElement, 'effect');
    }

  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
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
