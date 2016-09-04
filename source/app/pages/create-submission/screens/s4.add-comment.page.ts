import {Page,  NavController, NavParams} from 'ionic-angular';
import { StartPage } from './../../start/start'
import { NativeStorage } from 'ionic-native';
import {SubmissionBuilder} from './../../../providers/submission-builder/submission-builder'

@Page({
    templateUrl: 'build/pages/create-submission/screens/s4.add-comment.html'
})
export class CreateSubmission_Step4 {
    comment: string; 
    private builder: SubmissionBuilder;

    constructor(private nav: NavController, navParams: NavParams) {
        this.builder = navParams.get('builder');
    }

    submit() {
        console.log("trying to store: "+this.builder.getIdentifier());
        
        NativeStorage.setItem(this.builder.getIdentifier(), 
            this.builder
        ).then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
        );

    }
    cancel() {
        this.nav.popToRoot()
    }

}


