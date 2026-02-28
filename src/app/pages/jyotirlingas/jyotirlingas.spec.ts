import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jyotirlingas } from './jyotirlingas';

describe('Jyotirlingas', () => {
  let component: Jyotirlingas;
  let fixture: ComponentFixture<Jyotirlingas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jyotirlingas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jyotirlingas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
