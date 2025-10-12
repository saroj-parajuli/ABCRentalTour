import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCard } from './scheduling-card';

describe('SchedulingCard', () => {
  let component: SchedulingCard;
  let fixture: ComponentFixture<SchedulingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulingCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
