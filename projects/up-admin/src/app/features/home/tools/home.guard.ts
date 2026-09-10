import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { PATHS } from '../../routing';

export const homeGuard: CanActivateFn = () => {
  const as = inject(AuthService);
  const router = inject(Router);

  return as.isAuth() ? true : router.createUrlTree([PATHS.AUTH]);
};
