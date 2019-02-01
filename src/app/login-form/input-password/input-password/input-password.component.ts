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
  valueFocus: any;
  valueBlur: any;
  eventTarget: any;

  @Input() disabled: boolean;

  innerValue: any = '';
  onChangeFn = (_: any) => { };
  onTouched = () => { };

  constructor(private render: Renderer2, private element: ElementRef) { }

  onFocus(event) {
    this.valueFocus = event.target.value;
    this.eventTarget = event.target;
    this.render.addClass(this.element.nativeElement, 'upLabel');

    if (!this.eventTarget.validity.valid) {
      this.render.addClass(this.element.nativeElement, 'error');
    }
    else {
      this.render.addClass(this.element.nativeElement, 'effect');
    }
  }

  onBlur(event) {
    this.valueBlur = event.target.value;
    if (this.valueBlur === '' || this.eventTarget.validity.valid) {
      this.render.removeClass(this.element.nativeElement, 'effect');
    }
  }

  onPasswordChange(value) {
    this.onChangeFn(value);
    this.innerValue = value;

    if (this.eventTarget.value.length < 4) {
      this.render.addClass(this.element.nativeElement, 'error');
    }
    else {
      this.render.addClass(this.element.nativeElement, 'effect');
      this.render.removeClass(this.element.nativeElement, 'error');
    }
  }

  writeValue(value: any): void {
    this.innerValue = value || '';
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
