import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Zugriff auf alle Anliegen direkt über die API
 *  "service_request_id": "A-6631",
    "status": "open",
    "service_code": "016",
    "service_name": "Straßenbaustellen",
    "description": "Mehrere Baustellenschildfüße auf dem Grünstreifen auf der Aachener Straße auf Höhe des Parkplatz/Parkdecks vor dem RheinEnergieStadion ",
    "agency_responsible": null,
    "service_notice": null,
    "address_id": null,
    "requested_datetime": "2016-09-16T17:22:38+02:00",
    "updated_datetime": "2016-09-16T17:22:38+02:00",
    "address": "Fritz-Schröder-Weg 2, 50933 Köln - Müngersdorf",
    "zipcode": null,
    "lat": 50.9378104852,
    "long": 6.87475919724
 */
export class GeoreportSubmission {
  service_request_id: string;
  status: string;
  service_code: string;
  service_name: string; 
  description: string;
  agency_responsible: string;
  service_notice: string;
  address_id: string;
  requested_datetime: string;
  updated_datetime: string;
  address: string;
  zipcode: string;
  lat: string;
  long: string;
}

@Injectable()
export class AllSubmissionsProvider {
  private data: GeoreportSubmission[];

  constructor(public http: Http) { 
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('/allSubmissions') 
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data
          this.data = data;  
          resolve(this.data); 
          console.log('Successfully loaded ', this.data.length, 'submissions.' ); 
        });
    });
  }

  loadImages(service_id: string) {
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('/allSubmissions') 
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data
          this.data = data;  
          resolve(this.data); 
          console.log('Successfully loaded ', this.data.length, 'submissions.' ); 
        });
    });
  }

}