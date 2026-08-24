import { ErrorHandler, inject, Provider } from '@angular/core';
import { UpInfoService } from '@up-angular-ui/core';

class AppErrorHandler implements ErrorHandler {
  is = inject(UpInfoService);

  handleError(error: unknown): void {
    this.is.showError(error);
  }
}

export const provideAppErrorHandler = (): Provider => ({
  provide: ErrorHandler,
  useClass: AppErrorHandler,
});
