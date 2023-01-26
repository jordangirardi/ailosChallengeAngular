import { Component } from '@angular/core';

@Component({
  selector: 'app-client-earnings-form',
  templateUrl: './client-earnings-form.component.html',
  styleUrls: ['./client-earnings-form.component.scss'],
})
export class ClientEarningsFormComponent {
  protected isShowExtraForm: boolean = false;

  protected changeExtraForm(isShow: boolean): void {
    this.isShowExtraForm = isShow;
  }
}
