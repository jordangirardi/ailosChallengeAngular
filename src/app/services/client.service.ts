import { Injectable } from '@angular/core';
import { ClientInfo } from '../interfaces/client-info';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  public getClientInfo(): ClientInfo {
    return {
      infoCards: [
        {
          infoType: 3,
          title: 'Situação cadastral do CPF',
          subtitle: 'Consulta na receita federal',
          infos: [
            {
              title: 'Nome',
              info: 'Mariane de souza oliveira',
              icon: 'person',
            },
            { title: 'Situação do CPF', info: 'Regular', icon: 'check' },
          ],
        },
        {
          infoType: 1,
          title: 'Conta aplicação',
          subtitle: 'Cooperativa Viacredi',
          infos: [
            {
              title: 'Número da conta',
              info: '557932-4',
              icon: 'credit_card',
            },
          ],
        },
        {
          infoType: 1,
          title: 'Conta corrente',
          subtitle: 'Cooperativa viacredi',
          infos: [
            {
              title: 'Número da conta',
              info: '778461-8',
              icon: 'credit_card',
            },
          ],
        },
      ],
    };
  }
}
