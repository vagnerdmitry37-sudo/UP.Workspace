import { UpMenuItem } from '@up-angular-ui/core';

export interface ManagerView {
  collection: UpMenuItem[];
  configurations: UpMenuItem[];
}

export interface AppView {
  manager: ManagerView;
}
