import {Page, NavController, NavParams} from 'ionic-angular';
import {CreateSubmissionCategory} from './s3.select-category.page'
import {SubmissionBuilder} from './../../../providers/model'

@Page({
    templateUrl: 'build/pages/create-submission/screens/s2.get-coordinates.html'
})
export class CreateSubmissionStep2 {
    builder: SubmissionBuilder;
    coord: string;

    constructor(private nav: NavController, navParams: NavParams) {
        console.log(navParams);

        this.builder = navParams.get('builder');
    }


    // Get location
    printLocation() {
        return this.builder.getSubmission().latitude+ ', ' + this.builder.getSubmission().longitude ; 
    }


    step3() {
        console.log('Switching to next step 3.');

        this.nav.push(CreateSubmissionCategory);
    }

    cancel() {
        this.nav.popToRoot()
    }



}


