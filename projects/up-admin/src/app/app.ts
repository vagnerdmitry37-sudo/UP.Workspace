import { Component, inject } from '@angular/core';
import { UpButton, UpThemeService } from '@up-angular-ui/core';
import { Footer, Layout } from './components';
import { Manager } from './features';

@Component({
  selector: 'app-root',
  imports: [UpButton, Layout, Footer, Manager],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  uts = inject(UpThemeService);

  onClick() {
    this.uts.toggle();
  }
}
