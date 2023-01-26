import { Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-header-user-actions',
  templateUrl: './header-user-actions.component.html',
  styleUrls: ['./header-user-actions.component.scss'],
})
export class HeaderUserActionsComponent {
  protected employee: Employee = {
    avatarPath: './assets/img/profile-picture.png',
  };
}
