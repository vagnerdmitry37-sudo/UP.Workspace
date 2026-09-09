import { Component, input } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { ICONS } from '../../constants';

@Component({
  selector: 'up-button',
  imports: [ButtonModule],
  templateUrl: './up-button.html',
})
export class UpButton {
  label = input.required<string>();

  icon = input<typeof ICONS>();
  disabled = input<boolean>(false);
}
