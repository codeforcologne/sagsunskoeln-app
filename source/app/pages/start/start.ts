import {Page, NavController, NavParams} from 'ionic-angular';
import {CreateSubmissionPage} from './../CreateSubmission/CreateSubmission.page';
import {YourSubmissionsPage} from './../YourSubmissions/YourSubmissions.page';

@Page({
    templateUrl: 'build/pages/start/start.html'
})
export class StartPage {
    constructor(private nav: NavController, navParams: NavParams) {

    }

    jumpToList() {
        this.nav.push(YourSubmissionsPage);
    }

    jumpToNew() {
        this.nav.push(CreateSubmissionPage);
    }
}
