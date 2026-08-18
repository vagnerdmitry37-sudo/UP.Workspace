import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideUpAngularUI } from '@up-angular-ui/core';

export const appConfig: ApplicationConfig = {
  providers: [provideUpAngularUI(), provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
