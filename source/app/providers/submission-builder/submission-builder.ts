import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SubmissionBuilder {

  images: String[];
  location: any;


  getLocation() {
    return location; 
  }

  hasLocation() {
    return this.location != null; 
  }


  constructor() {
    this.location = ""; 

  }
  setLocation(location: any) {
    this.location = location;
  }

  addImage(url: string) {
    this.images.push(url);
    console.log("Image:" + url);
  }


}

