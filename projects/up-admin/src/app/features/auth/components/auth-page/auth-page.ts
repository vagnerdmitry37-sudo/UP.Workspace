import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UpLogin } from '@up-angular-ui/core';
import { AuthService } from '../..';
import { FetchService } from '../../../http';
import { NavigationService } from '../../../routing';

@Component({
  selector: 'app-auth-page',
  imports: [UpLogin],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  as = inject(AuthService);
  fb = inject(FormBuilder);
  fs = inject(FetchService);
  ns = inject(NavigationService);

  from = this.fb.nonNullable.group({
    email: ['root@mail.com', Validators.required],
    password: ['Password12345@', Validators.required],
  });

  submited() {
    this.fs.post('auth/login', this.from.value).subscribe(() => {
      this.as.isAuth.set(true);
      this.ns.navigateToPage('HOME');
    });
  }

  getUser() {
    this.fs.get('user').subscribe();
  }
}
