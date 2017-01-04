import {Component} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';


@Component({
    templateUrl: 'category-details.html'
})
export class SubmissionCategoriesDetails {
    category; 

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        // console.log('Param: ', JSON.stringify(params));
         this.category = this.params.get('_category');



    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}