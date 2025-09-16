import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachStatCards } from './coach-stat-cards';

describe('CoachStatCards', () => {
  let component: CoachStatCards;
  let fixture: ComponentFixture<CoachStatCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachStatCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachStatCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
