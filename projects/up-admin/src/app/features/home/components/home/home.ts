import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from '../layout/layout';
import { Manager } from '../manager/manager';
import { FetchService } from '../../../http';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Layout, Footer, Manager, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  fs = inject(FetchService);

  onLogout() {
    this.fs.post('auth/logout').subscribe();
  }
}
