import {Page,  NavController, NavParams} from 'ionic-angular';
import {CreateSubmission_Step4} from './s4.add-comment.page'
import {StartPage} from './../../start/start'

@Page({
    templateUrl: 'build/pages/create-submission/screens/s3.select-category.html'
})
export class CreateSubmission_Step3 {
    picture: any; 

    constructor(private nav: NavController, navParams: NavParams) {
    }

    // Get location
    step4() {
        this.nav.push(CreateSubmission_Step4);
    }

    cancel() {
        this.nav.push(StartPage)
    }



}


