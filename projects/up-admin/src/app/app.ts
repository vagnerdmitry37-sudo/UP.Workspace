import { Component, inject, signal } from '@angular/core';
import { UpButton, UpHoldDirective, UpThemeService } from '@up-angular-ui/core';

@Component({
  selector: 'app-root',
  imports: [UpButton, UpHoldDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('up-admin');

  uts = inject(UpThemeService);

  held() {
    console.log('🚀 ~ App ~ held');
  }

  clicked() {
    console.log('🚀 ~ App ~ clicked');
  }

  holding() {
    console.log('🚀 ~ App ~ holding');
  }
}
