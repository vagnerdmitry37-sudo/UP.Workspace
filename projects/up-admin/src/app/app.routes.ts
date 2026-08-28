import { Routes } from '@angular/router';
import { AuthPage, homePageGuard, loginPageGuard } from './features/auth';
import { PAGE_TITLES } from './constants';
import { HomePage } from './features/home-page';
import { UsersPage } from './features/users-page';
import { TransfersPage } from './features/transfers-page';

export const routes: Routes = [
  {
    path: PAGE_TITLES.AUTH,
    component: AuthPage,
    canActivate: [loginPageGuard],
  },
  {
    path: PAGE_TITLES.HOME,
    component: HomePage,
    canActivate: [homePageGuard],
    children: [
      {
        path: PAGE_TITLES.USERS,
        component: UsersPage,
      },
      {
        path: PAGE_TITLES.TRANSFERS,
        component: TransfersPage,
      },
    ],
  },
];
