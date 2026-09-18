import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AppUsersFetchService } from '../../app-users';
import { NavigationService } from '../../routing';
import { catchError, map, of } from 'rxjs';
import { AppUsersStateService } from '../../app-users/services/app-users-state.service';
import { AppUser } from '../../app-users/types/app-user.type';

export const authGuard: CanActivateFn = () => {
  const ns = inject(NavigationService);
  const aufs = inject(AppUsersFetchService);
  const auss = inject(AppUsersStateService);

  if (auss.appUser()) return true;

  const success = (appUser: AppUser) => {
    auss.appUser.set(appUser);
    return true;
  };

  const error = () => {
    ns.navigateToPage('LOGIN');
    return of(false);
  };

  return aufs.me().pipe(map(success), catchError(error));
};
