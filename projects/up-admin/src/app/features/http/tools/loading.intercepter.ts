import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingIntercepter: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const ls = inject(LoadingService);

  return next(req).pipe(
    tap(() => ls.isLoading.set(true)),
    finalize(() => ls.isLoading.set(false)),
  );
};
