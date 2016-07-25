import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Geolocation} from 'ionic-native';

/*
  provides methods to create (and store) a submission
*/
class Submission {
  images: String[];
  location: any;

  constructor() {

  }

  getLocation() {
    return location; 
  }


}


@Injectable()
export class SubmissionBuilder {
  private meldung: Submission;

  constructor() {

    this.meldung = new Submission();
  }

  setLocation(location: any) {
    this.meldung.location = location;
  }

  addImage(url: string) {
    this.meldung.images.push(url);
    console.log("Image:" + url);
  }

  getSubmission() {
    return this.meldung; 
  }
}

