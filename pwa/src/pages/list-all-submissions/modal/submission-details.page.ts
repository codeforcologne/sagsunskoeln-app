import {Component} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';
import { Submission } from './../../../providers/model';
import * as providers from './../../../providers';

@Component({
    templateUrl: 'submission-details.html'
})
export class AllSubmissionsDetailsPage {
    submission: Submission;
    view: string = 'info';
    marked: boolean = false; 

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController, 
        public storage: providers.SubmissionStorage
    ) {
        this.submission = this.params.get('submission');
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    mark() {
        // send request with current submission and user id to mark operation

        this.storage.markSubmission(this.submission); 

        this.marked = true; 
    }

    isMarked() {
        return this.marked; 
    }

    public getImages() {
        
    }

}