import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { FlightService } from './services/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Simple Flight Search';

  flightNumber: string;
  origin: string;
  destination: string;
  date: string;

  flight: any;
  outputFlight: any = {};

  constructor(private router: Router, private flightService: FlightService) {

  }
  
  onSubmit() {
    this.flight = {
      flightNumber: this.flightNumber,
      origin: this.origin,
      destination: this.destination,
      departure: this.date
    }

    this.flightService.fetchFlight(this.flight)
      .subscribe(
        (result) => {
          this.outputFlight = result;
        },
        (err) => console.log(err)
      );

    this.router.navigate(['fetchFlight']);
  }

}

