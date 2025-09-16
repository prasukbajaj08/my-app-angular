import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeStatCards } from './coachee-stat-cards';

describe('CoacheeStatCards', () => {
  let component: CoacheeStatCards;
  let fixture: ComponentFixture<CoacheeStatCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoacheeStatCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoacheeStatCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
