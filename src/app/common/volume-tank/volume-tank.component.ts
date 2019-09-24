import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-tank',
  templateUrl: './volume-tank.component.html',
  styleUrls: ['./volume-tank.component.css']
})
export class VolumeTankComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }




  public FAD ;
  public time ;
  public pressure = 1.013
  public usingPressure ;
  public tankVolume ;

  onSearchChange(){
    this.tankVolume = ((this.time*this.FAD*this.pressure)/(this.usingPressure+this.pressure)).toFixed(3)
  }


}
