import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-signatures',
  templateUrl: './docs-signatures.component.html',
  styleUrls: ['./docs-signatures.component.scss'],
})
export class DocsAssignaturesComponent {
  protected accountOwners = [
    {
      role: 'Titular',
      accountType: 'Conta corrente na Viacredi',
      ownerInfos: [
        { title: 'Nome', value: 'Mariana de Sousa Oliveira', icon: 'person' },
        {
          title: 'Número da conta corrente',
          value: '557932-4',
          icon: 'credit_card',
        },
      ],
    },
    {
      role: 'Segundo titular',
      accountType: 'Conta corrente na Viacredi',
      ownerInfos: [
        { title: 'Nome', value: 'José Carlos Oliveira', icon: 'person' },
        {
          title: 'Relacionamento com o titular',
          value: 'Cônjuge',
          icon: 'favorite',
        },
      ],
    },
  ];
}
