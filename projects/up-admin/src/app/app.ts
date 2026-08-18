import { Component, signal } from '@angular/core';
import { UpAngularUi } from 'up-angular-ui';

@Component({
  selector: 'app-root',
  imports: [UpAngularUi],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('up-admin');
}
