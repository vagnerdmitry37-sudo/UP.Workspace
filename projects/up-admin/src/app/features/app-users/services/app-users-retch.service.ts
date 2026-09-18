import { inject, Injectable } from '@angular/core';
import { FetchService } from '../../http';
import { AppUser } from '../types/app-user.type';

@Injectable({
  providedIn: 'root',
})
export class AppUsersFetchService {
  private fs = inject(FetchService);

  me() {
    return this.fs.get<AppUser>('app-user/me');
  }
}
