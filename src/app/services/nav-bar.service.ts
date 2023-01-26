import { Injectable } from '@angular/core';
import { NavItem } from '../interfaces/navItem';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  constructor() {}

  public getNavItems(): Array<NavItem> {
    return [
      {
        description: 'MainMenu',
        icon: 'menu',
      },
      {
        description: 'Search',
        icon: 'search',
      },
      {
        description: 'Favourites',
        icon: 'star_border',
      },
      {
        description: 'Chats',
        icon: 'chat_bubble_outline',
      },
      {
        description: 'Settings',
        icon: 'settings',
      },
      {
        description: 'CentralBank',
        icon: 'home',
      },
    ];
  }
}
