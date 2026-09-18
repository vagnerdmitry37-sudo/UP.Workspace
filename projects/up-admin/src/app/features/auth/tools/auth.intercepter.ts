import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthFetchService } from '../services/auth-fetch.service';
import { AUTH_URLS } from '../constants/auth-urls.constant';

export const authIntercepter: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const afs = inject(AuthFetchService);

  const isRefreshRequest = req.url.includes(AUTH_URLS.REFRESH);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401 || isRefreshRequest) {
        return throwError(() => error);
      }

      return afs.refresh().pipe(switchMap(() => next(req)));
    }),
  );
};
