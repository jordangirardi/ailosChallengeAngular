import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.scss'],
})
export class InfoDisplayComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() info: string = '';
}
