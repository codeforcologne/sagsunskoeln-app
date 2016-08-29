import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreateSubmission_Step1} from './screens/s1.take-picture.page'
import {SubmissionBuilder} from './../../providers/submission-builder/submission-builder'

@Component({
  templateUrl: 'build/pages/create-submission/create-submission.html',
  providers: [SubmissionBuilder]
})
export class CreateSubmissionPage {
  constructor(private navCtrl: NavController, private _builder: SubmissionBuilder) {
       navCtrl.push(CreateSubmission_Step1, {
             builder: _builder
      });
  }


}
