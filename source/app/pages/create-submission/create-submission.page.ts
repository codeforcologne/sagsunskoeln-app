import {Page,  NavController, NavParams} from 'ionic-angular';
import {ImagePicker} from 'ionic-native';
import {Camera} from 'ionic-native';
import {CreateSubmission_Step1} from './screens/s1.take-picture.page'
import {SubmissionBuilder} from './../../providers/submission-builder/submission-builder'




@Page({
    templateUrl: 'build/pages/create-submission/create-submission.html'
})
export class CreateSubmissionPage {
    picture: any; 

    constructor(private nav: NavController, navParams: NavParams) {


        this.nav.push(CreateSubmission_Step1, {
            builder: new SubmissionBuilder()
        });
    }



}


