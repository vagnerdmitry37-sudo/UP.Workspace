import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideUpAngularUI } from '@up-angular-ui/core';
import { provideAppErrorHandler } from './tools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppErrorHandler(),
    provideUpAngularUI(),
    provideRouter(routes),
  ],
};
