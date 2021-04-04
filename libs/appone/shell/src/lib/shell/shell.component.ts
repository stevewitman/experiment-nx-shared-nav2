import { Component } from '@angular/core';

@Component({
  selector: 'reusable-nav2-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  navConfig = {
    siteName: 'App One',
    menuItems: [
      {
        text: 'About',
        route: 'about',
      },
      {
        text: 'Blog',
        route: 'blog',
      },
      {
        text: 'Contact',
        route: 'contact',
      },
    ],
  };
}
