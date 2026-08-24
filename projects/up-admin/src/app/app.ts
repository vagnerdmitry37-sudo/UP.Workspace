import { Component, inject } from '@angular/core';
import { UpButton, UpThemeService } from '@up-angular-ui/core';
import { Footer, Layout } from './components';
import { Login, Manager } from './features';

@Component({
  selector: 'app-root',
  imports: [UpButton, Layout, Login, Footer, Manager],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  uts = inject(UpThemeService);

  isLogedin = false;

  onClick() {
    this.uts.toggle();
  }
}
