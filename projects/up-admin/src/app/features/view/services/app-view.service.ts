import { Injectable, signal } from '@angular/core';
import { AppView } from '../../../types';

@Injectable({
  providedIn: 'root',
})
export class AppViewService {
  appView = signal<AppView | null>(null);
}
