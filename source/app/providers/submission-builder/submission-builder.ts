import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Geolocation} from 'ionic-native';

@Injectable()
export class SubmissionBuilder {

  latitude: Number;
  longitude: Number;
  images: Array<{ title: string, base64Image: string }>;

  constructor() {
    // acquire location as soon as we build a new SubmissionBuilder
    this.images = Array(); 
    this.acquireLocation(); 
  }

  acquireLocation() {
     Geolocation.getCurrentPosition().then((resp) => {
                console.log("Coordinates are " + resp.coords.latitude + "," + resp.coords.longitude);
                this.latitude = resp.coords.latitude; 
                this.longitude = resp.coords.longitude; 
            });
  }

  getLocation() {
    return location; 
  }

  getLatitude() {
    return this.latitude; 
  }

  getLongitude() {
    return this.longitude; 
  }

  hasLocation() {
    return this.latitude > -200; 
  }

  addImage(title: string, base64Image: string) {
    this.images.push({title, base64Image});
  }

  getImages() {
    return this.images; 
  }




}

