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
  public P1;
  public P2;
  public kW;
  public Test;
  
  onSearchChange() {
    this.Test = ((this.P2+this.P1)*100)/(this.P1*100)
    this.kW = ((1.2054*(this.T1+273.15))*(Math.pow((this.Test),0.286)-1)*(this.FADComp/1000)).toFixed(2)
  }

  
}
