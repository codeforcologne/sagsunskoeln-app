import {Page,  NavController, NavParams} from 'ionic-angular';
import {StartPage} from './../../start/start'

@Page({
    templateUrl: 'build/pages/create-submission/screens/s4.add-comment.html'
})
export class CreateSubmission_Step4 {
    comment: string; 

    constructor(private nav: NavController, navParams: NavParams) {
    }


    cancel() {
        this.nav.popToRoot()
    }

}


