import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SchedulingCardComponent } from './scheduling-card';


describe('SchedulingCard', () => {
  let component: SchedulingCardComponent;
  let fixture: ComponentFixture<SchedulingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulingCardComponent, NoopAnimationsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
