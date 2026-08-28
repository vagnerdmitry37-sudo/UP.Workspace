import { Component, inject } from '@angular/core';
import { UpButton, UpThemeService, UpInfo } from '@up-angular-ui/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [UpButton, UpInfo, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  uts = inject(UpThemeService);

  onClick() {
    this.uts.toggle();
  }
}
