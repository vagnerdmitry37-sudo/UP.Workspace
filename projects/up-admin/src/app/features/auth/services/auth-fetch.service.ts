import { inject, Injectable } from '@angular/core';
import { FetchService } from '../../http';
import { AuthStateService } from './auth-state.service';
import { AUTH_URLS } from '../constants/auth-urls.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthFetchService {
  fs = inject(FetchService);
  ass = inject(AuthStateService);

  login(prpos: { email?: string; password?: string }) {
    return this.fs.post(AUTH_URLS.LOGIN, prpos);
  }

  refresh() {
    return this.fs.post(AUTH_URLS.REFRESH);
  }

  logout() {
    return this.fs.post(AUTH_URLS.LOGOUT);
  }
}
