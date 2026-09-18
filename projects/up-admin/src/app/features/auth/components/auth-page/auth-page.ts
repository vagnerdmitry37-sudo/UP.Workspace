import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { Manager } from './manager/manager';
import { FetchService } from '../../../http';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-auth-page',
  imports: [Layout, Footer, Manager, RouterOutlet],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  fs = inject(FetchService);
  onLogout() {
    this.fs.post('auth/logout').subscribe();
  }
}
