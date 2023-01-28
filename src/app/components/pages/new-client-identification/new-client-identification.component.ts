import { Component } from '@angular/core';
import { InfoTypeEnum } from 'src/app/enumerators/info-type';
import { ClientInfo } from 'src/app/interfaces/client-info';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-new-client-identification',
  templateUrl: './new-client-identification.component.html',
  styleUrls: ['./new-client-identification.component.scss'],
})
export class NewClientIdentificationComponent {
  protected enumInfoType = InfoTypeEnum;
  protected errorMessage: string = '';
  protected clientCpf: string = '';
  protected clientInfo: ClientInfo = { infoCards: [] };
  protected showError: boolean = false;
  protected isShowTips: boolean = false;
  protected isExpandTips: boolean = false;

  constructor(private clientService: ClientService) {}

  protected inputChange(value: string): void {
    this.clientCpf = value;
  }

  protected searchClient(): void {
    if (this.clientCpf.length == 11) {
      this.clientInfo = this.clientService.getClientInfo();
      this.errorMessage = '';
      this.showError = false;
    } else {
      this.errorMessage = 'CPF inválido';
      this.showError = true;
    }
  }

  protected showTips(): void {
    this.isShowTips = true;
  }

  protected hideInfoBlock(): void {
    this.isShowTips = false;
  }

  protected changeExtraInfo(isShow: boolean): void {
    this.isExpandTips = isShow;
  }
}
