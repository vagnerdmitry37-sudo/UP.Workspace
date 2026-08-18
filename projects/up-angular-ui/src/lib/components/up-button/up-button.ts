import { Component, OnDestroy, output } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { Subject, interval, switchMap, takeUntil, finalize } from 'rxjs';

@Component({
  selector: 'up-button',
  imports: [ButtonModule],
  templateUrl: './up-button.html',
})
export class UpButton implements OnDestroy {
  held = output();
  clicked = output();
  holding = output<number>();

  private readonly startHold$ = new Subject<void>();
  private readonly endHold$ = new Subject<void>();

  private readonly heldThresholdMilliseconds = 500;
  private readonly clickedThresholdMilliseconds = 200;

  private holding$ = this.startHold$
    .pipe(
      switchMap(() => {
        const startedAt = Date.now();

        return interval(10).pipe(
          takeUntil(this.endHold$),

          switchMap(() => {
            const elapsed = Date.now() - startedAt;

            return [elapsed];
          }),

          finalize(() => {
            const elapsed = Date.now() - startedAt;

            if (elapsed <= this.clickedThresholdMilliseconds) {
              this.clicked.emit();
            }

            if (elapsed >= this.heldThresholdMilliseconds) {
              this.held.emit();
            }
          }),
        );
      }),
    )
    .subscribe((elapsed) => this.holding.emit(elapsed));

  startHold() {
    this.startHold$.next();
  }

  endHold() {
    this.endHold$.next();
  }

  ngOnDestroy() {
    this.holding$.unsubscribe();
  }
}
