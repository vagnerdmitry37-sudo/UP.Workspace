import { Routes } from '@angular/router';
import { Auth, loginGuard } from '../../auth';
import { UsersPage } from '../../users-page';
import { TransfersPage } from '../../transfers-page';
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
        component: UsersPage,
      },
      {
        path: PATHS.TRANSFERS,
        component: TransfersPage,
      },
    ],
  },
];
