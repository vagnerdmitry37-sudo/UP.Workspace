import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';
import { DARK_MODE_SELECTOR } from '../constants';

export const provideUpAngularUI = () => {
  return provideOptimus({
    theme: {
      preset: Aura,
      options: { darkModeSelector: `.${DARK_MODE_SELECTOR}` },
    },
  });
};
