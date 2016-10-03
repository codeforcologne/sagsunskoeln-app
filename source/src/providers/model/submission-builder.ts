import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Geolocation} from 'ionic-native';
import {Submission} from './submission'; 




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
                console.log('Coordinates are ' + resp.coords.latitude + ',' + resp.coords.longitude);
                this.submission.latitude = resp.coords.latitude; 
                this.submission.longitude = resp.coords.longitude; 
            });
  }

  public addImage(title: string, path: string) {
    this.submission.images.push({title, path});
  }

  public removeImage(path: string) {
        this.submission.images.splice(this.submission.images.findIndex(img => img.path === path), 1); 
  }

  public getSubmission() {
    return this.submission; 
  }

  public addComment(comment: string) {
    this.submission.comment = comment; 
  }
}

