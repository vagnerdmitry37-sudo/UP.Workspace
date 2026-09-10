import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { NavigationService } from '../../routing';

export const loginGuard: CanActivateFn = () => {
  const as = inject(AuthService);
  const ns = inject(NavigationService);
  const navigateToHomePage = () => ns.createUrlTreeForPage('HOME');

  if (as.isAuth()) return navigateToHomePage();
  return as.checkMe().pipe(map((isAuth) => (isAuth ? navigateToHomePage() : true)));
};
