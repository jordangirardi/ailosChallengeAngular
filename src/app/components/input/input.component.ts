import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Placeholder text';
  @Input() error!: string;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  protected inputValue: string = '';

  protected handleChange(): void {
    //possíveis validações genéricas no valor do input.
    this.valueChange.emit(this.inputValue);
  }
}
