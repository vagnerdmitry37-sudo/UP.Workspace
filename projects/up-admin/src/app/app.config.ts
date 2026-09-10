import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './features/routing/tools/routes';
import { provideUpAngularUI } from '@up-angular-ui/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingIntercepter, provideAppErrorHandler } from './features/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppErrorHandler(),
    provideUpAngularUI(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loadingIntercepter])),
  ],
};
