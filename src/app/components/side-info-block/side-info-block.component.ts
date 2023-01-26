import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-info-block',
  templateUrl: './side-info-block.component.html',
  styleUrls: ['./side-info-block.component.scss'],
})
export class SideInfoBlockComponent {
  @Input() isShowInfoBlock!: boolean;
}
