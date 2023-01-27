import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() secondaryLabel: string = '';
  @Input() type: string = 'text';
  @Input() mask: string = '';
  @Input() placeholder: string = 'Placeholder text';
  @Input() showError: boolean = false;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  protected inputValue: string = '';

  protected handleChange(): void {
    this.valueChange.emit(this.inputValue);
  }
}
