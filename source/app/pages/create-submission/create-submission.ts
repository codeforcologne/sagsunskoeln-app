import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateSubmissionImages } from './screens/s1.take-picture.page'
import { SubmissionBuilder } from './../../providers/submission-builder/submission-builder'

@Component({
  templateUrl: 'build/pages/create-submission/create-submission.html',
  providers: [SubmissionBuilder]
})
// deprecated
export class CreateSubmissionPage {
  constructor(private navCtrl: NavController, private _builder: SubmissionBuilder) {
    navCtrl.push(CreateSubmissionImages, {
      builder: _builder
    });
  }


}
