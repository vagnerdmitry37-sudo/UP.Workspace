import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UpLogin } from '@up-angular-ui/core';
import { AuthService } from '../..';
import { NavigationService } from '../../../routing';
import { AppViewService } from '../../../view';

@Component({
  selector: 'app-auth-page',
  imports: [UpLogin],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  as = inject(AuthService);
  fb = inject(FormBuilder);
  ns = inject(NavigationService);
  aws = inject(AppViewService);

  from = this.fb.nonNullable.group({
    email: ['root@mail.com', Validators.required],
    password: ['Password12345@', Validators.required],
  });

  submited() {
    this.as.login(this.from.value).subscribe(({ appUser }) => {
      this.aws.appView.set(appUser.settings.view);
      this.as.isAuth.set(true);
      this.ns.navigateToPage('HOME');
    });
  }
}
