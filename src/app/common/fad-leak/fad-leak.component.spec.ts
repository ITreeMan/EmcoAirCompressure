import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FADLeakComponent } from './fad-leak.component';

describe('FADLeakComponent', () => {
  let component: FADLeakComponent;
  let fixture: ComponentFixture<FADLeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FADLeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FADLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
