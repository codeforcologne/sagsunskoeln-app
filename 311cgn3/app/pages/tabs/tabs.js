import {Page} from 'ionic-angular';
import {Page1} from '../submit/page1';
import {Page2} from '../list/page2';
import {Page3} from '../settings/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
  }
}
