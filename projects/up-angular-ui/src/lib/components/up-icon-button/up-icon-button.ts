import { Component, input } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';

export interface UpIconButtonProps {
  icon: 'pi-th-large';
}

@Component({
  selector: 'up-icon-button',
  imports: [ButtonModule],
  templateUrl: './up-icon-button.html',
})
export class UpIconButton {
  icon = input.required<UpIconButtonProps['icon']>();
}
