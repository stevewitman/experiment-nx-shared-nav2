import { Component, Input } from '@angular/core';

@Component({
  selector: 'reusable-nav2-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() navConfig;
}
