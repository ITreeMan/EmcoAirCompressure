import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLayoutMobileComponent } from './btn-layout-mobile.component';

describe('BtnLayoutMobileComponent', () => {
  let component: BtnLayoutMobileComponent;
  let fixture: ComponentFixture<BtnLayoutMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLayoutMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLayoutMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
