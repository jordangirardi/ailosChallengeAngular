import { Component } from '@angular/core';

@Component({
  selector: 'app-client-attorney-form',
  templateUrl: './client-attorney-form.component.html',
  styleUrls: ['./client-attorney-form.component.scss'],
})
export class ClientAttorneyFormComponent {
  protected permissions = [
    { id: 1, label: 'Emitir cheques', hasPermission: false },
    { id: 2, label: 'Endossar cheques', hasPermission: false },
    { id: 3, label: 'permission name', hasPermission: false },
    { id: 4, label: 'permission name', hasPermission: false },
    { id: 5, label: 'permission name', hasPermission: false },
    { id: 6, label: 'permission name', hasPermission: false },
    { id: 7, label: 'permission name', hasPermission: false },
    { id: 8, label: 'permission name', hasPermission: false },
    { id: 9, label: 'permission name', hasPermission: false },
  ];

  protected changeCheckboxState(isChecked: boolean, checkBox: any): void {
    checkBox.checked = isChecked;
  }

  protected markAllPermissions(): void {
    this.permissions.map((permission) => (permission.hasPermission = true));
  }
}
