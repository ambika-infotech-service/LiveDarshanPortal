import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devotional } from './devotional';

describe('Devotional', () => {
  let component: Devotional;
  let fixture: ComponentFixture<Devotional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devotional]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Devotional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
