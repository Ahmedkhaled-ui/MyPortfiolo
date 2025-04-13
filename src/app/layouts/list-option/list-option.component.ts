import { Component } from '@angular/core';
import { InavItem } from '../../shared/interfaces/inav-item';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-option',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './list-option.component.html',
  styleUrl: './list-option.component.css',
})
export class ListOptionComponent {
  navItem: InavItem[] = [
    {
      icon: 'pi-home',
      name: 'home',
      rout: '/home',
    },
    {
      icon: 'pi-book',
      name: 'Resume',
      rout: '/reusme',
    },
    {
      icon: 'pi-briefcase',
      name: 'Work',
      rout: '/skills',
    },
    {
      icon: 'pi-address-book',
      name: 'Contact',
      rout: '/contact',
    },
  ];
}
