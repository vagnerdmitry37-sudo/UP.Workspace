import { Directive, OnDestroy, output } from '@angular/core';
import { Subject, interval, switchMap, takeUntil, finalize } from 'rxjs';

@Directive({
  selector: '[upHold]',
  host: {
    '(pointerup)': 'endHold()',
    '(pointerdown)': 'startHold()',
    '(pointerleave)': 'endHold()',
    '(pointercancel)': 'endHold()',
  },
})
export class UpHoldDirective implements OnDestroy {
  readonly held = output<void>();
  readonly clicked = output<void>();
  readonly holding = output<number>();

  private readonly startHold$ = new Subject<void>();
  private readonly endHold$ = new Subject<void>();

  private readonly heldThresholdMilliseconds = 500;
  private readonly clickedThresholdMilliseconds = 200;

  private readonly holdingSubscription = this.startHold$
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

  startHold(): void {
    this.startHold$.next();
  }

  endHold(): void {
    this.endHold$.next();
  }

  ngOnDestroy(): void {
    this.endHold$.next();
    this.holdingSubscription.unsubscribe();
  }
}
