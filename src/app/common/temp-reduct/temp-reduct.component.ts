import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-reduct',
  templateUrl: './temp-reduct.component.html',
  styleUrls: ['./temp-reduct.component.css']
})
export class TempReductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public FADComp;

  public T1;
  public T2;
  public PAir = 1.013;
  public P2;
  public kW1;
  public kW2;
  public PowerSaving;
  public TestBefore;
  public TestAfter;
  
  onSearchChangeBefore() {
    this.TestBefore = ((this.P2+this.PAir)*100)/(this.PAir*100)
    this.kW1 = ((1.2054*(this.T1+273.15))*(Math.pow((this.TestBefore),0.286)-1)*(this.FADComp/1000)).toFixed(2)
    this.PowerSaving = (this.kW1-this.kW2).toFixed(3)
  }

  onSearchChangeAfter() {
    this.TestAfter = ((this.P2+this.PAir)*100)/(this.PAir*100)
    this.kW2 = ((1.2054*(this.T2+273.15))*(Math.pow((this.TestAfter),0.286)-1)*(this.FADComp/1000)).toFixed(2)
    this.PowerSaving = (this.kW1-this.kW2).toFixed(3)
  }

  
}
