import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pressure-reduct',
  templateUrl: './pressure-reduct.component.html',
  styleUrls: ['./pressure-reduct.component.css']
})
export class PressureReductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public FAD;
  public T;
  public PAir = 1.013;
  public P2Before;
  public P2After;
  public kW1;
  public kW2;

  public PowerSaving;


  onSearchChangeBefore() {
    this.kW1 = ((1.2054*(this.T+273.15))*(Math.pow((((this.PAir+this.P2Before)*100)/(this.PAir*100)),0.286)-1)*(this.FAD/1000)).toFixed(2)    
    this.PowerSaving = (this.kW1-this.kW2).toFixed(3)
  }

  onSearchChangeAfter() {
    this.kW2 = ((1.2054*(this.T+273.15))*(Math.pow((((this.PAir+this.P2After)*100)/(this.PAir*100)),0.286)-1)*(this.FAD/1000)).toFixed(2)    
    this.PowerSaving = (this.kW1-this.kW2).toFixed(3)
  }




}
