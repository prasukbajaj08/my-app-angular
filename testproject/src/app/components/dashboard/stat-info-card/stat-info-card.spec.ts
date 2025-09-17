import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatInfoCard } from './stat-info-card';

describe('StatInfoCard', () => {
  let component: StatInfoCard;
  let fixture: ComponentFixture<StatInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
