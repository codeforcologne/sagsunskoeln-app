import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreateSubmissionImages } from './..';


@Component({
  templateUrl: 'start.html',
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
