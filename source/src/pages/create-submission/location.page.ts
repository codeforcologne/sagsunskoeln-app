import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateSubmissionCategory } from './..'
import { SubmissionBuilder } from './../../providers';

@Component({
    templateUrl: 'location.html'
})
export class CreateSubmissionStepLocation {
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


