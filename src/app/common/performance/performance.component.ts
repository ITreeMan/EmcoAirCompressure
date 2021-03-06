import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})


export class PerformanceComponent implements OnInit {
  // @Input() arcDelimitersData:any;
  // @Input() performanceMax:any;
  // @Input() performanceMin:any;

  constructor() { }

  ngOnInit() {
    
  }


  good: any;
  bad: any;
  result: any;

  public KW ;
  public VT ;
  public VP ;
  public Time ;
  public P1 ;
  public P2 ;
  public FAD;
  public KWFAD;
  public textShow = "kW/FAD = ";

  public canvasWidth = 225
  public needleValue = 50
  public centralLabel = ''
  public name = ''
  public bottomLabel = ''

  public optionsPiston = {
    hasNeedle: true,
    needleColor: "black",
    needleStartValue: 50,
    arcColors: ["rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)"],
    arcDelimiters: [35, 48],
    rangeLabel: ["0", "1"],
  }

  public optionsScrew = {
    hasNeedle: true,
    needleColor: "black",
    needleStartValue: 50,
    arcColors: ["rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)"],
    arcDelimiters: [40, 46],
    rangeLabel: ["0", "1"],
  }

  public optionsRotary = {
    hasNeedle: true,
    needleColor: "black",
    needleStartValue: 50,
    arcColors: ["rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)"],
    arcDelimiters: [40, 46],
    rangeLabel: ["0", "1"],
  }

  // FAD = ((this.P2-this.P1)*(this.VP+this.VT))/(1.013*this.Time)



  onSearchChange(): void {
    this.FAD = (((this.P2 - this.P1) * (this.VP + this.VT)) / (1.013 * this.Time)).toFixed(2)
    this.KWFAD = (this.KW / this.FAD).toFixed(3)
    this.textShow = "kW/FAD = " + this.KWFAD

  }



}
