import { Injectable } from '@angular/core';
import { DARK_MODE_SELECTOR } from '../constants';

type UpThemes = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class UpThemeService {
  theme: UpThemes = 'light';

  set(theme: UpThemes) {
    document.documentElement.classList.toggle(DARK_MODE_SELECTOR, theme === 'dark');
  }

  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.set(this.theme);
  }
}
