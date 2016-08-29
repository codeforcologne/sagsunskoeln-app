import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CreateSubmissionPage} from './../create-submission/create-submission';

@Component({
  templateUrl: 'build/pages/start/start.html',
})
export class StartPage {

  constructor(private navCtrl: NavController) {

  }

    jumpToList() {
        // this.nav.push(YourSubmissionsPage);
    }

    jumpToNew() {
        this.navCtrl.push(CreateSubmissionPage);
    }
    
}
