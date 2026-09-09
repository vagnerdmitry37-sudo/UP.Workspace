import { Component, inject } from '@angular/core';
import { UpProgressbarIndeterminate } from '@up-angular-ui/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  imports: [UpProgressbarIndeterminate],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading {
  ls = inject(LoadingService);
}
