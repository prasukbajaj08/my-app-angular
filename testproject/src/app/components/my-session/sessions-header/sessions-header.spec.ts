import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsHeader } from './sessions-header';

describe('SessionsHeader', () => {
  let component: SessionsHeader;
  let fixture: ComponentFixture<SessionsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
