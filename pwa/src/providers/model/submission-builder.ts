import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';
import { Submission } from './submission';




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

  public addImage(title: string, data: string): void {
    this.submission.images.push({ title, data });
  }


  public getImage(title: string): string {
    let res = this.submission.images.find(img => img.title === title);

    if (res !== undefined) {
      return res.data;
    } 
  }


  public addImageAsFile(file: File): void {

    let reader = new FileReader();

    // using a closure to keep the name, see http://stackoverflow.com/questions/16937223/pass-a-parameter-to-filereader-onload-event
    reader.onload = (function (file: File, subb: SubmissionBuilder) {
      let f: File = file;
      return function (e: Event) {
        subb.addImage(f.name, reader.result);
      };
    })(file, this)

    reader.readAsDataURL(file);

  }


  public removeImage(title: string) {
    this.submission.images.splice(this.submission.images.findIndex(img => img.title === title), 1);
  }

  public getSubmission() {
    return this.submission;
  }

  public addComment(comment: string) {
    this.submission.comment = comment;
  }
}




// WEBPACK FOOTER //
// ./src/providers/model/submission-builder.ts