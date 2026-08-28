import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PAGE_TITLES } from '../../../constants';

export const homePageGuard: CanActivateFn = () => {
  const as = inject(AuthService);
  const router = inject(Router);

  return as.isAuth() ? true : router.createUrlTree([PAGE_TITLES.AUTH]);
};
