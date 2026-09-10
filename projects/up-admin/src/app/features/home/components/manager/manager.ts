import { Component, viewChild } from '@angular/core';
import { UpHoldDirective, UpIconButton, UpMenu, UpMenuItem } from '@up-angular-ui/core';

@Component({
  selector: 'app-manager',
  imports: [UpMenu, UpHoldDirective, UpIconButton],
  templateUrl: './manager.html',
  styleUrl: './manager.css',
})
export class Manager {
  settingsItems: UpMenuItem[] = [{ label: 'Settings', icon: 'pi pi-plus' }];

  collectionsItems: UpMenuItem[] = [
    { label: 'Teansfers', icon: 'pi pi-plus' },
    { label: 'Excurtions', icon: 'pi pi-plus' },
  ];

  settingsMenu = viewChild<UpMenu>('settingsMenu');
  collectionsMenu = viewChild<UpMenu>('collectionsMenu');

  onHeld(event: Event) {
    this.toggle(event, this.collectionsMenu(), this.settingsMenu());
  }

  onClicked(event: Event) {
    this.toggle(event, this.settingsMenu(), this.collectionsMenu());
  }

  toggle(event: Event, menu?: UpMenu, other?: UpMenu) {
    if (menu?.isVisible()) {
      menu.hide();
    }

    other?.toggle(event);
  }
}
