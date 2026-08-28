import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { Footer } from './footer/footer';
import { Manager } from './manager/manager';

@Component({
  selector: 'app-home-page',
  imports: [Layout, Footer, Manager, RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
