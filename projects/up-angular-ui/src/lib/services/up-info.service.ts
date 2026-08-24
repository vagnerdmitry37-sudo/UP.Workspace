import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from '@openng/optimus-ui/api';

@Injectable({
  providedIn: 'root',
})
export class UpInfoService {
  private ms = inject(MessageService);

  showInfo(detail: string) {
    this.ms.add({
      detail,
      summary: 'Info',
      severity: 'info',
    });
  }

  showError(value: unknown) {
    const options: ToastMessageOptions = {
      detail: 'Unexpected error',
      summary: 'Error',
      severity: 'error',
    };

    if (value instanceof HttpErrorResponse) {
      if (this.hasMessageProp(value.error)) {
        options.detail = value.error.message;
      }
    } else if (this.hasMessageProp(value)) {
      options.detail = value.message;
    }

    this.ms.add(options);
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
