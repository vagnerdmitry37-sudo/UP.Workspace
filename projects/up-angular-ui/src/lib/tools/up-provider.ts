import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';
import { DARK_MODE_SELECTOR } from '../constants';
import { MessageService } from '@openng/optimus-ui/api';
import { EnvironmentProviders, Provider } from '@angular/core';

export const provideUpAngularUI = () => {
  const providers: (Provider | EnvironmentProviders)[] = [
    provideOptimus({
      theme: {
        preset: Aura,
        options: { darkModeSelector: `.${DARK_MODE_SELECTOR}` },
      },
    }),
    MessageService,
  ];

  return providers;
};
