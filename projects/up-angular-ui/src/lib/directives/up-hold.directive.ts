import { Directive, OnDestroy, output } from '@angular/core';
import { Subject, interval, switchMap, takeUntil, finalize } from 'rxjs';

@Directive({
  selector: '[upHold]',
  host: {
    '(pointerup)': 'endHold($event)',
    '(pointerdown)': 'startHold($event)',
    '(pointerleave)': 'endHold($event)',
    '(pointercancel)': 'endHold($event)',
  },
})
export class UpHoldDirective implements OnDestroy {
  readonly held = output<PointerEvent>();
  readonly clicked = output<PointerEvent>();
  readonly holding = output<number>();

  private lastEvent: PointerEvent | null = null;

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

            if (elapsed <= this.clickedThresholdMilliseconds && this.lastEvent) {
              this.clicked.emit(this.lastEvent);
            }

            if (elapsed >= this.heldThresholdMilliseconds && this.lastEvent) {
              this.held.emit(this.lastEvent);
            }
          }),
        );
      }),
    )
    .subscribe((elapsed) => this.holding.emit(elapsed));

  startHold(event: PointerEvent): void {
    this.lastEvent = event;
    this.startHold$.next();
  }

  endHold(event: PointerEvent): void {
    this.lastEvent = event;
    this.endHold$.next();
  }

  ngOnDestroy(): void {
    this.endHold$.next();
    this.holdingSubscription.unsubscribe();
  }
}
