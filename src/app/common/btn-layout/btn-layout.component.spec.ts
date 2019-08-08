import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLayoutComponent } from './btn-layout.component';

describe('BtnLayoutComponent', () => {
  let component: BtnLayoutComponent;
  let fixture: ComponentFixture<BtnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
