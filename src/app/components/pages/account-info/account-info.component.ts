import { Component } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent {
  protected accountTypes = [
    { id: 1, description: 'Conta corrente' },
    { id: 2, description: 'Conta aplicação' },
    { id: 3, description: 'Conta salário' },
    { id: 4, description: 'Conta júnior' },
  ];
}
