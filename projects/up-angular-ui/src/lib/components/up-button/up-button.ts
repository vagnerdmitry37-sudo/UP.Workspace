import { Component, input } from '@angular/core';
import { ButtonModule, ButtonSeverity } from '@openng/optimus-ui/button';
import { ICONS } from '../../constants';

@Component({
  selector: 'up-button',
  imports: [ButtonModule],
  templateUrl: './up-button.html',
})
export class UpButton {
  label = input.required<string>();

  icon = input<typeof ICONS>();
  severity = input<ButtonSeverity>('contrast');
  disabled = input<boolean>(false);
}
