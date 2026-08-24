import { Component, input, output } from '@angular/core';
import { Card } from '@openng/optimus-ui/card';
import { InputText } from '@openng/optimus-ui/inputtext';
import { IconField } from '@openng/optimus-ui/iconfield';
import { InputIcon } from '@openng/optimus-ui/inputicon';
import { Password } from '@openng/optimus-ui/password';
import { UpButton } from '../up-button/up-button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'up-login',
  imports: [Card, IconField, InputIcon, InputText, Password, UpButton, ReactiveFormsModule],
  templateUrl: './up-login.html',
  styleUrl: './up-login.css',
})
export class UpLogin {
  email = input.required<FormControl>();
  password = input.required<FormControl>();
  buttonDisabled = input(false);
  submited = output();

  onClick() {
    this.submited.emit();
  }
}
