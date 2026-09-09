import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject, Provider } from '@angular/core';
import { UpInfoService } from '@up-angular-ui/core';

class AppErrorHandler implements ErrorHandler {
  uis = inject(UpInfoService);

  handleError(value: unknown): void {
    if (value instanceof HttpErrorResponse) {
      if (this.hasMessageProp(value.error)) {
        this.uis.showError(value.error.message);
      }
    } else if (this.hasMessageProp(value)) {
      this.uis.showError(value.message);
    }
  }

  private hasMessageProp(value: unknown): value is { message: string } {
    return (
      typeof value === 'object' &&
      value !== null &&
      'message' in value &&
      typeof value.message === 'string'
    );
  }
}

export const provideAppErrorHandler = (): Provider => ({
  provide: ErrorHandler,
  useClass: AppErrorHandler,
});
