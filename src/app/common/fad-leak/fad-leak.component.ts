import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fad-leak',
  templateUrl: './fad-leak.component.html',
  styleUrls: ['./fad-leak.component.css']
})
export class FADLeakComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public FADL;

  public timeOnload;
  public timeUnload;
  public FADComp;


  onSearchChange() {
    this.FADL = (((this.timeOnload) / (this.timeOnload + this.timeUnload)) * this.FADComp).toFixed(2)
  }



}
