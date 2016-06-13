import {Page, NavController, NavParams} from 'ionic-angular';
import {NeueMeldungPage} from './../NeueMeldung/NeueMeldung';
import {ListPage} from './../list/list';

@Page({
    templateUrl: 'build/pages/start/start.html'
})
export class StartPage {
    constructor(private nav: NavController, navParams: NavParams) {

    }

    jumpToList() {
        console.log("yay"); 
        this.nav.push(ListPage);
    }

    jumpToNew() {
        this.nav.push(NeueMeldungPage);
    }
}
