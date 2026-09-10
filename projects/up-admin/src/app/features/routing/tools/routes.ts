import { Routes } from '@angular/router';
import { Auth, loginGuard } from '../../auth';
import { Home, homeGuard } from '../../home';
import { PATHS } from '../constants/paths';

export const routes: Routes = [
  {
    path: PATHS.AUTH,
    component: Auth,
    canActivate: [loginGuard],
  },
  {
    path: PATHS.HOME,
    component: Home,
    canActivate: [homeGuard],
    children: [
      {
        path: PATHS.USERS,
      },
      {
        path: PATHS.TRANSFERS,
      },
    ],
  },
];
