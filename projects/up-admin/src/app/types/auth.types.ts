import { AppView } from './view.types';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AppUser {
  id: number;
  name: string;
  email: string;
  surname: string;
  settings: AppUserSettings;
}

export interface AppUserSettings {
  id: number;
  view: AppView;
}

export interface LoginResponse {
  appUser: AppUser;
}
