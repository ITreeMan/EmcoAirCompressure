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
  public P1;
  public P2;
  public kW ;


  onSearchChange(){
    this.kW = ((1.2054*(this.T+273.15))*(Math.pow((((this.P1+this.P2)*100)/(this.P1*100)),0.286)-1)*(this.FAD/1000)).toFixed(2)    
  }




}
