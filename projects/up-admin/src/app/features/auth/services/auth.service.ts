import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { FetchService } from '../../http';
import { LoginRequest, LoginResponse } from '../../../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fs = inject(FetchService);

  isAuth = signal(false);

  me() {
    return this.fs.post('auth/me');
  }

  refresh() {
    return this.fs.post('auth/refresh');
  }

  login(prpos: Partial<LoginRequest>) {
    return this.fs.post<LoginResponse>('auth/login', prpos);
  }

  checkMe() {
    return this.me().pipe(map(this.checkMeSuccess), catchError(this.checkMeFaiure));
  }

  private checkMeSuccess = () => {
    this.isAuth.set(true);
    return true;
  };

  private checkMeFaiure = () => {
    return this.refresh().pipe(
      map(this.checkMeSuccess),
      catchError(() => of(false)),
    );
  };
}
