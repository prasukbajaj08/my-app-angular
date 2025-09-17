import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsTabs } from './sessions-tabs';

describe('SessionsTabs', () => {
  let component: SessionsTabs;
  let fixture: ComponentFixture<SessionsTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
