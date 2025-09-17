import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeRequests } from './coachee-requests';

describe('CoacheeRequests', () => {
  let component: CoacheeRequests;
  let fixture: ComponentFixture<CoacheeRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoacheeRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoacheeRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
