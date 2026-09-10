import { Routes } from '@angular/router';
import { AuthPage, loginGuard } from '../../auth';
import { HomePage, homeGuard } from '../../home';
import { PATHS } from '../constants/paths';

export const routes: Routes = [
  {
    path: PATHS.AUTH,
    component: AuthPage,
    canActivate: [loginGuard],
  },
  {
    path: PATHS.HOME,
    component: HomePage,
    canActivate: [homeGuard],
    children: [],
  },
];
