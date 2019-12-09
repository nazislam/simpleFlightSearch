import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  fetchFlight(flight: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/fetchFlight/', flight, { headers: headers });
  }
}
