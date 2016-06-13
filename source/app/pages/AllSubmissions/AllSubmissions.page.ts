
import {Page, NavController, NavParams} from 'ionic-angular';
import { SubmissionDetailsPage } from './../SubmissionDetails/SubmissionDetails.page'


@Page({
    templateUrl: 'build/pages/AllSubmissions/AllSubmissions.html'
})
export class AllSubmissionsPage {

    constructor(private nav: NavController, navParams: NavParams) {

    }

  categoryTapped(event, item) {
    this.nav.push(SubmissionDetailsPage, {
      item: item
    });
  }
  


}


