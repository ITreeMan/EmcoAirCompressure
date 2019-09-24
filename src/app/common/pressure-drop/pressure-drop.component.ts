import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pressure-drop',
  templateUrl: './pressure-drop.component.html',
  styleUrls: ['./pressure-drop.component.css']
})
export class PressureDropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   public deltaPressure ;
   public f = 450;
   public L ;
   public FAD;
   public P;
   public D;


   onSearchChange(){
    this.deltaPressure = ((this.f*this.L*Math.pow(this.FAD,1.85)) / (this.P*Math.pow(this.D,5))).toFixed(4)
  }

}
