import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CreateSubmissionImages} from './../create-submission/screens/s1.take-picture.page';


@Component({
  templateUrl: 'build/pages/start/start.html',
})
export class StartPage {

  constructor(private navCtrl: NavController) {

  }

    jumpToList() {
    //    this.nav.push(YourSubmissionsPage);
    }

    jumpToNew() {
        this.navCtrl.push(CreateSubmissionImages);
    }

    jumpToHelp() {

    }
    
}
