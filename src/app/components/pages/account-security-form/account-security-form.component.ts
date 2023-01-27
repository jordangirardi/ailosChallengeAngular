import { Component } from '@angular/core';
import { InfoDisplay } from 'src/app/interfaces/info-display';

@Component({
  selector: 'app-account-security-form',
  templateUrl: './account-security-form.component.html',
  styleUrls: ['./account-security-form.component.scss'],
})
export class AccountSecurityFormComponent {
  protected accountInfos: InfoDisplay[] = [
    { title: 'Nome', info: 'Mariane de Souza Oliveira', icon: 'person' },
    { title: 'Número da conta', info: '447456-7', icon: 'credit_card' },
  ];
}
