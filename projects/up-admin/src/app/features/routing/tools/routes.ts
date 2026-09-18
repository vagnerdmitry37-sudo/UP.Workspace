import { Routes } from '@angular/router';
import { authGuard, AuthPage, LoginPage } from '../../auth';
import { PATHS } from '../constants/paths';
import { UsersPage } from '../../app-users';

export const routes: Routes = [
  {
    path: PATHS.AUTH,
    component: AuthPage,
    canActivate: [authGuard],
    children: [
      {
        path: PATHS.USERS,
        component: UsersPage,
      },
    ],
  },
  {
    path: PATHS.LOGIN,
    component: LoginPage,
  },
  {
    path: '**',
    redirectTo: PATHS.AUTH,
  },
];
