import { Injectable, signal } from '@angular/core';
import { AppUser } from '../types/app-user.type';

@Injectable({
  providedIn: 'root',
})
export class AppUsersStateService {
  appUser = signal<AppUser | null>(null);
}
