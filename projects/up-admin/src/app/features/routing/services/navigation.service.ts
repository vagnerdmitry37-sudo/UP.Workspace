import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS } from '../constants/paths';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  router = inject(Router);

  navigateToPage(key: keyof typeof PATHS) {
    this.router.navigate([PATHS[key]]);
  }

  createUrlTreeForPage(key: keyof typeof PATHS) {
    return this.router.createUrlTree([PATHS[key]]);
  }
}
