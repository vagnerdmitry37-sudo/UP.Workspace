import { Component, signal } from '@angular/core';
import { UpAngularUi, UpButton } from '@up-angular-ui/core';

@Component({
  selector: 'app-root',
  imports: [UpAngularUi, UpButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('up-admin');
}
