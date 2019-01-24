

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
  styleUrls: ['./input-email.component.css']
})


export class InputEmailComponent implements ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() label: string;

  innerValue: any = '';
  onChangeFn = (_: any) => { };
  onTouched = () => { };

  constructor(private render: Renderer2, private element: ElementRef) { }

  onEmailChange(event) {

    this.onTouched();
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
