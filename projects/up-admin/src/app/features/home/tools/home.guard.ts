import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { NavigationService } from '../../routing';

export const homeGuard: CanActivateFn = () => {
  const as = inject(AuthService);
  const ns = inject(NavigationService);

  return as.isAuth() ? true : ns.createUrlTreeForPage('AUTH');
};
