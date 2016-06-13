import {Page, NavController, NavParams} from 'ionic-angular';
// import {SubmissionDetailsPage} from './../SubmissionDetails/SubmissionDetails.page';


@Page({
  templateUrl: 'build/pages/YourSubmissions/YourSubmissions.html'
})
export class YourSubmissionsPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    console.log("Hello World")
    /*
    this.nav.push(SubmissionDetailsPage, {
      item: item
    });
    */
  }
}
