import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UpLogin } from '@up-angular-ui/core';
import { FetchService } from '../../services';

@Component({
  selector: 'app-login',
  imports: [UpLogin],
  templateUrl: './login.html',
})
export class Login {
  protected fb = inject(FormBuilder);
  protected fs = inject(FetchService);

  protected from = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  protected submited() {
    this.fs.post('auth/login', this.from.value).subscribe();
  }
}
