import {Component} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';
import { Submission } from './../../../providers/model';

@Component({
    templateUrl: './build/pages/all-submissions/modal/submission-description.html'
})
export class SubmissionDescriptionPage {
    submission: Submission;
    view: string = 'info';
    isAndroid: boolean = false; 

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        this.submission = this.params.get('submission');
        this.isAndroid = platform.is('android'); 
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    public getImages() {
        
    }

}