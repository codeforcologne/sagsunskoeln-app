import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as provider from './../../providers';

@Component({
    templateUrl: 'description.html'
})
export class CreateSubmissionDescription {
    comment: string; 
    builder: provider.SubmissionBuilder;

    // TechDeb: Parameter should be SubmissionStorage (Interface), but can't compile
    constructor(private nav: NavController, navParams: NavParams, public storage: provider.SubmissionsCache) {
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


