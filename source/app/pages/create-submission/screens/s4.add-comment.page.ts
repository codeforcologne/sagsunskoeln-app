import {Page,  NavController, NavParams} from 'ionic-angular';

import {SubmissionBuilder} from './../../../providers/submission-builder/submission-builder';
import {Storage} from './../../../providers/storage/storage.sqlite';

@Page({
    templateUrl: 'build/pages/create-submission/screens/s4.add-comment.html', 
    providers: [Storage]
})
export class CreateSubmissionDescription {
    comment: string; 
    builder: SubmissionBuilder;

    constructor(private nav: NavController, navParams: NavParams, public storage: Storage) {
        this.builder = navParams.get('builder');
    }

    submit() {
        console.log('test1');
        console.log(this.builder);
        
        this.builder.addComment(this.comment); 
        
        console.log('test2');

        this.storage.storeSubmission(this.builder.getSubmission()); 
        this.nav.popToRoot();
    }


    cancel() {
        this.nav.popToRoot();
    }

}


