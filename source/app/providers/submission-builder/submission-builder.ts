import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Geolocation} from 'ionic-native';

@Injectable()
export class SubmissionBuilder {
  id: string; 
  latitude: Number;
  longitude: Number;
  images: Array<{ title: string, base64Image: string }>;

  constructor() {
    // id (needed as reference in storage) is simply current time
    this.id = "id#"+new Date().toISOString(); 
    this.images = Array(); 

    // acquire location as soon as we build a new SubmissionBuilder
    this.acquireLocation(); 
  }

  acquireLocation() {
     Geolocation.getCurrentPosition().then((resp) => {
                console.log("Coordinates are " + resp.coords.latitude + "," + resp.coords.longitude);
                this.latitude = resp.coords.latitude; 
                this.longitude = resp.coords.longitude; 
            });
  }

  getIdentifier() {
    return this.id; 
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

