import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeTankComponent } from './volume-tank.component';

describe('VolumeTankComponent', () => {
  let component: VolumeTankComponent;
  let fixture: ComponentFixture<VolumeTankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeTankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
