import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() label!: string;
  @Output() onCheckboxChange: EventEmitter<any> = new EventEmitter();

  protected handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onCheckboxChange.emit(input.checked);
  }
}
