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

  isVisible() {
    return Boolean(this.menu()?.visible);
  }

  setVisible(visible: boolean) {
    const menu = this.menu();
    if (menu) {
      menu.visible = visible;
    }
  }

  show(event: Event) {
    this.menu()?.show(event);
  }

  hide() {
    this.menu()?.hide();
  }

  toggle(event: Event) {
    this.menu()?.toggle(event);
  }
}
