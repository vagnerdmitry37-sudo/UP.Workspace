import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';
import { DARK_MODE_SELECTOR } from '../constants';
import { MessageService } from '@openng/optimus-ui/api';
import { EnvironmentProviders, Provider } from '@angular/core';
import { definePreset } from '@openng/optimus-ui-themes';

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}',
        },
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}',
        },
      },
    },
  },
});

export const provideUpAngularUI = () => {
  const providers: (Provider | EnvironmentProviders)[] = [
    provideOptimus({
      theme: {
        preset: Noir,
        options: { darkModeSelector: `.${DARK_MODE_SELECTOR}` },
      },
    }),
    MessageService,
  ];

  return providers;
};
