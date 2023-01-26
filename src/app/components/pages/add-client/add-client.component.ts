import { Component } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent {
  protected isShowInfoBlock: boolean = false;
  protected isShowExtraInfo: boolean = false;

  protected showInfoBlock(): void {
    console.log(this.isShowInfoBlock);
    this.isShowInfoBlock = true;
  }

  protected hideInfoBlock(): void {
    this.isShowInfoBlock = false;
  }

  protected changeExtraInfo(isShow: boolean): void {
    this.isShowExtraInfo = isShow;
  }
}
