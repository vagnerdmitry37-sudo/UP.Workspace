import { Component, inject } from '@angular/core';
import { UpButton, UpThemeService, UpInfo } from '@up-angular-ui/core';
import { RouterOutlet } from '@angular/router';
import { Loading } from './features/http';

@Component({
  selector: 'app-root',
  imports: [UpButton, UpInfo, RouterOutlet, Loading],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  uts = inject(UpThemeService);

  onClick() {
    this.uts.toggle();
  }
}
