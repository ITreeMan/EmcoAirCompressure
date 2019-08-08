import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-btn-layout',
  templateUrl: './btn-layout.component.html',
  styleUrls: ['./btn-layout.component.css']
})
export class BtnLayoutComponent implements OnInit {
  breakpoint: number;
  
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.breakpoint = 5
      }else{
        this.breakpoint = 2
      }
    });
  }

  ngOnInit() {
  }



}
