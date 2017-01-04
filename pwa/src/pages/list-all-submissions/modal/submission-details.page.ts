import {Component} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';
import { Submission } from './../../../providers/model';

@Component({
    templateUrl: 'submission-details.html'
})
export class AllSubmissionsDetailsPage {
    submission: Submission;
    view: string = 'info';
    isFavorite: boolean = false; 
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

    setFavorit() {
        this.isFavorite = true; 
    }

    public getImages() {
        
    }

}