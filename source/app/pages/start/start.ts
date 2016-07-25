import {Page, NavController, NavParams} from 'ionic-angular';
import {CreateSubmissionPage} from './../create-submission/create-submission.page';
import {YourSubmissionsPage} from './../your-submissions/your-submissions.page';

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
