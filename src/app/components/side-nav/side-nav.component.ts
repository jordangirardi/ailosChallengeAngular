import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavItem } from 'src/app/interfaces/navItem';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  protected navItems: NavItem[] = [];

  constructor(private navBarService: NavBarService) {
    this.navItems = this.navBarService.getNavItems();
  }
}
