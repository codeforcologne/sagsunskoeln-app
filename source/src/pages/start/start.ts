import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreateSubmissionImages, YourSubmissionsPage } from './..';


@Component({
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(private navCtrl: NavController) {

  }

  jumpToSubmissions() {
    this.navCtrl.push(YourSubmissionsPage);
  }

  jumpToNew() {
    this.navCtrl.push(CreateSubmissionImages);
  }

  jumpToHelp() {

  }

}
