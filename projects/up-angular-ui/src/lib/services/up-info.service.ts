import { inject, Injectable } from '@angular/core';
import { MessageService } from '@openng/optimus-ui/api';

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

  showError(detail: string) {
    this.ms.add({
      detail,
      summary: 'Error',
      severity: 'error',
    });
  }
}
