import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UpLogin } from '@up-angular-ui/core';
import { FetchService } from '../../../services';
import { AuthService } from '..';
import { Router } from '@angular/router';

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
  router = inject(Router);

  from = this.fb.nonNullable.group({
    email: ['root@mail.com', Validators.required],
    password: ['Password12345@', Validators.required],
  });

  submited() {
    this.fs.post('auth/login', this.from.value).subscribe(() => {
      this.as.isAuth.set(true);
      this.router.navigate(['']);
    });
  }

  getUser() {
    this.fs.get('user').subscribe();
  }
}
