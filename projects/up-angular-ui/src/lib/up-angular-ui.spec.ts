import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpAngularUi } from './up-angular-ui';

describe('UpAngularUi', () => {
  let component: UpAngularUi;
  let fixture: ComponentFixture<UpAngularUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpAngularUi],
    }).compileComponents();

    fixture = TestBed.createComponent(UpAngularUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
