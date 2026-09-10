import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { PATHS } from '../../routing';

export const loginGuard: CanActivateFn = () => {
  const as = inject(AuthService);
  const router = inject(Router);
  const navigateToHomePage = () => router.createUrlTree([PATHS.HOME]);

  if (as.isAuth()) return navigateToHomePage();
  return as.checkMe().pipe(map((isAuth) => (isAuth ? navigateToHomePage() : true)));
};
