import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from '../layout/layout';
import { Manager } from '../manager/manager';
import { FetchService } from '../../../http';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home-page',
  imports: [Layout, Footer, Manager, RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  fs = inject(FetchService);

  onLogout() {
    this.fs.post('auth/logout').subscribe();
  }
}
