import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PAGE_TITLES } from '../../../constants';
import { map } from 'rxjs';

export const loginPageGuard: CanActivateFn = () => {
  const as = inject(AuthService);
  const router = inject(Router);
  const navigateToHomePage = () => router.createUrlTree([PAGE_TITLES.HOME]);

  if (as.isAuth()) return navigateToHomePage();
  return as.checkMe().pipe(map((isAuth) => (isAuth ? navigateToHomePage() : true)));
};
