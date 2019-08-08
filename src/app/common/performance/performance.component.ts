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



  good: any;
  bad: any;
  result:any;

  public KW =1 ;
  public FAD =1 ;

  public canvasWidth = 300
  public needleValue = 50
  public centralLabel = ''
  public name = ''
  public bottomLabel = ''

  public optionsPiston = {
    hasNeedle: true,
    needleColor: "black",
    needleStartValue: 50,
    arcColors: [ "rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)" ],
    arcDelimiters: [35, 48],
    rangeLabel: ["0", "1"],
  }

  public optionsScrew = {
    hasNeedle: true,
    needleColor: "black",
    needleStartValue: 50,
    arcColors: [ "rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)" ],
    arcDelimiters: [40, 46],
    rangeLabel: ["0", "1"],
  }

  public optionsRotary = {
    hasNeedle: true,
    needleColor: "black",
    needleStartValue: 50,
    arcColors: [ "rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)" ],
    arcDelimiters: [40, 46],
    rangeLabel: ["0", "1"],
  }



  constructor() { }

  ngOnInit() {
  }

}
