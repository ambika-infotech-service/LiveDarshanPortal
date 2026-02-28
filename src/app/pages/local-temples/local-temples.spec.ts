import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTemples } from './local-temples';

describe('LocalTemples', () => {
  let component: LocalTemples;
  let fixture: ComponentFixture<LocalTemples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalTemples]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LocalTemples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
