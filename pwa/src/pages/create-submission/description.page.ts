import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage, SubmissionBuilder } from './../../providers';

@Component({
    templateUrl: 'description.html'
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


