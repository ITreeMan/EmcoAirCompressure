import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempReductComponent } from './temp-reduct.component';

describe('TempReductComponent', () => {
  let component: TempReductComponent;
  let fixture: ComponentFixture<TempReductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempReductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempReductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
