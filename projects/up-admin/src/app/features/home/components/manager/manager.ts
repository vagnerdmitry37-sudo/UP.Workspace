import { Component } from '@angular/core';
import { UpHoldDirective, UpIconButton, UpMenu } from '@up-angular-ui/core';

@Component({
  selector: 'app-manager',
  imports: [UpMenu, UpHoldDirective, UpIconButton],
  templateUrl: './manager.html',
  styleUrl: './manager.css',
})
export class Manager {
  items = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'New', icon: 'pi pi-plus' },
  ];
}
