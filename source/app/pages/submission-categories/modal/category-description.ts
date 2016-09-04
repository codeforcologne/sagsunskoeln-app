import {Component} from '@angular/core';
import {ModalController, Platform, NavParams, ViewController} from 'ionic-angular';


@Component({
    templateUrl: './build/pages/submission-categories/modal/category-description.html'
})
export class CategoryDescriptionPage {
    category; 

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
         this.category = this.params.get('_category');



    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}