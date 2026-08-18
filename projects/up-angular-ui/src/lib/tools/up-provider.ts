import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';
import Lara from '@openng/optimus-ui-themes/lara';
import Material from '@openng/optimus-ui-themes/material';
import Nora from '@openng/optimus-ui-themes/nora';
import { Preset } from '@openng/optimus-ui-themes/types';
import { DARK_MODE_SELECTOR } from '../constants';

type UpPreset = 'Aura' | 'Lara' | 'Material' | 'Nora';

interface ProvideUpAngularUIProps {
  preset?: UpPreset;
}

const presetsMap: Record<UpPreset, Preset> = {
  Aura,
  Lara,
  Material,
  Nora,
};

export const provideUpAngularUI = (props: ProvideUpAngularUIProps = {}) => {
  const { preset = 'Aura' } = props;

  return provideOptimus({
    theme: {
      preset: presetsMap[preset],
      options: { darkModeSelector: `.${DARK_MODE_SELECTOR}` },
    },
  });
};
