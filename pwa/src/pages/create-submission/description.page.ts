import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SubmissionStorage, SubmissionBuilder } from './../../providers';

@Component({
    templateUrl: 'description.html'
})
export class CreateSubmissionDescription {
    comment: string; 
    builder: SubmissionBuilder;

    constructor(private nav: NavController, navParams: NavParams, public storage: SubmissionStorage) {
        this.builder = navParams.get('builder');
    }

    submit() {
        console.log(this.builder);
        
        this.builder.addComment(this.comment); 
        

        this.storage.createSubmission(this.builder.getSubmission())
            .then(subm => {
                 this.nav.popToRoot();   
            })
            .catch(err => {

            })
        
    }


    cancel() {
        this.nav.popToRoot();
    }

}


