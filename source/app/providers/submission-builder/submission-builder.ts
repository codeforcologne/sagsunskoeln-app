import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Geolocation} from 'ionic-native';

export class Submission {
  id: string; // profil#timestamp 
  latitude: number;
  longitude: number;
  images: Array<{ title: string, base64Image: string }>;
  comment: string; 
  // status
  // submission Date
  // profil

  constructor() {
    // id (needed as reference in storage) is simply current time
    this.id = "id#"+new Date().toISOString(); 
    this.images = Array(); 
  }



}



@Injectable()
export class SubmissionBuilder {
  submission: Submission; 

  constructor() {
    this.submission = new Submission(); 

    // acquire location as soon as we build a new SubmissionBuilder
    this.acquireLocation(); 
  }

  private acquireLocation() {
     Geolocation.getCurrentPosition().then((resp) => {
                console.log("Coordinates are " + resp.coords.latitude + "," + resp.coords.longitude);
                this.submission.latitude = resp.coords.latitude; 
                this.submission.longitude = resp.coords.longitude; 
            });
  }

  public addImage(title: string, base64Image: string) {
    this.submission.images.push({title, base64Image});
  }

  public getSubmission() {
    return this.submission; 
  }

  public addComment(comment: string) {
    this.submission.comment = comment; 
  }
}

