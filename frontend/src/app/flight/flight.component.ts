import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {
  @Input() outputFlight: any;
  
  constructor() { }

  ngOnInit() {
    
  }

}
