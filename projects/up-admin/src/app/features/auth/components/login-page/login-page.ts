import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UpLogin } from '@up-angular-ui/core';
import { AuthFetchService } from '../..';
import { NavigationService } from '../../../routing';
import { AppViewService } from '../../../view';

@Component({
  selector: 'app-login-page',
  imports: [UpLogin],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  afs = inject(AuthFetchService);
  fb = inject(FormBuilder);
  ns = inject(NavigationService);
  aws = inject(AppViewService);

  from = this.fb.nonNullable.group({
    email: ['root@mail.com', Validators.required],
    password: ['Password12345@', Validators.required],
  });

  submited() {
    this.afs.login(this.from.value).subscribe(() => {
      this.ns.navigateToPage('HOME');
    });
  }
}
