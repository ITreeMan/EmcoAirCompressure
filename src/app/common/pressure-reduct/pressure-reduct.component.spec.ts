import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureReductComponent } from './pressure-reduct.component';

describe('PressureReductComponent', () => {
  let component: PressureReductComponent;
  let fixture: ComponentFixture<PressureReductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressureReductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureReductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
