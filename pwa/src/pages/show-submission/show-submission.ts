import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-show-submission',
  templateUrl: 'show-submission.html'
})
export class ShowSubmissionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowSubmissionPage');
  }

}
