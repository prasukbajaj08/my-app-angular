import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCoaches } from './find-coaches';

describe('FindCoaches', () => {
  let component: FindCoaches;
  let fixture: ComponentFixture<FindCoaches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindCoaches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindCoaches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
