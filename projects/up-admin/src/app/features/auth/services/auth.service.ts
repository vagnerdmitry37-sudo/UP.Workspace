import { inject, Injectable, signal } from '@angular/core';
import { FetchService } from '../../../services';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fs = inject(FetchService);

  isAuth = signal(false);

  me() {
    return this.fs.post('auth/me');
  }

  refresh() {
    return this.fs.post('auth/refresh');
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
