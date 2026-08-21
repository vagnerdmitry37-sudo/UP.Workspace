import { Component, input, viewChild } from '@angular/core';
import { MenuItem } from '@openng/optimus-ui/api';
import { Menu, MenuModule } from '@openng/optimus-ui/menu';

@Component({
  selector: 'up-menu',
  imports: [MenuModule],
  templateUrl: './up-menu.html',
  styleUrl: './up-menu.css',
})
export class UpMenu {
  items = input.required<MenuItem[]>();
  styleClass = input<string>();

  menu = viewChild<Menu>('menu');

  toggle(event: Event) {
    this.menu()?.toggle(event);
  }
}
