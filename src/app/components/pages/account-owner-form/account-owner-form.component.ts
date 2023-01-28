import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderEnum } from 'src/app/enumerators/gender';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-account-owner-form',
  templateUrl: './account-owner-form.component.html',
  styleUrls: ['./account-owner-form.component.scss'],
})
export class AccountOwnerFormComponent {
  protected form!: FormGroup;
  protected gender = GenderEnum;

  protected client: Client = new Client();

  constructor() {
    this.createForm(this.client);
  }

  //Criação do formulário utilizando o sistema mat-grid .
  protected inputs = [
    {
      type: 'text',
      label: 'Label',
      colspan: 2,
      rowspan: 1,
      value: '',
    },
    {
      type: 'text',
      label: 'Label2',
      colspan: 4,
      rowspan: 1,
      value: '',
    },
    {
      type: 'text',
      label: 'Label3',
      colspan: 6,
      rowspan: 1,
      value: '',
    },
    {
      type: 'text',
      label: 'Label4',
      colspan: 6,
      rowspan: 1,
      value: '',
    },
    {
      type: 'text',
      label: 'Label5',
      colspan: 6,
      rowspan: 1,
      value: '',
    },
    {
      type: 'text',
      label: 'Label6',
      colspan: 4,
      rowspan: 1,
      value: '',
    },
    {
      type: 'text',
      label: 'Label7',
      colspan: 4,
      rowspan: 1,
      value: '',
    },
    {
      type: 'text',
      label: 'Label8',
      colspan: 4,
      rowspan: 1,
      value: '',
    },
  ];

  //simulação de dados vindos do banco
  protected capacities: any = [
    { id: 1, description: 'Menor emancipado' },
    { id: 2, description: 'Menor ' },
    { id: 3, description: 'Maior incapaz' },
    { id: 4, description: 'Maior capaz' },
  ];

  logForm() {
    console.log(this.form);
  }

  protected createForm(client: Client) {
    this.form = new FormGroup({
      nome: new FormControl(client.nome),
      apelido: new FormControl(client.apelido),
      dataNascimento: new FormControl(client.dataNascimento),
      capacidadeCivil: new FormControl(client.capacidadeCivil),
      dataEmancipacao: new FormControl(client.dataEmancipacao),
      estadoCivil: new FormControl(client.estadoCivil),
      isPCD: new FormControl(client.isPCD),
      necessidade: new FormControl(client.necessidade),
      tipoNacionalidade: new FormControl(client.tipoNacionalidade),
      nacionalidade: new FormControl(client.nacionalidade),
      naturalidade: new FormControl(client.naturalidade),
      sexo: new FormControl(client.sexo),
      nomeMae: new FormControl(client.nomeMae),
      nomePai: new FormControl(client.nomePai),
      cpf: new FormControl(client.cpf),
      situacaoCpf: new FormControl(client.situacaoCpf),
      dataConsultaCpf: new FormControl(client.dataConsultaCpf),
      documentoIdentidade: new FormControl(client.documentoIdentidade),
      numeroDocumentoIdentidade: new FormControl(
        client.numeroDocumentoIdentidade
      ),
      orgaoEmissor: new FormControl(client.orgaoEmissor),
      ufEmissor: new FormControl(client.ufEmissor),
      dataEmissao: new FormControl(client.dataEmissao),
    });
  }

  protected changeInputValue(input: any, valor: string): void {
    if (input) {
      input.value = valor;
    }
  }

  protected loadClientPicture(): void {
    this.client.pictureSource = './assets/img/profile-picture.png';
  }
}
