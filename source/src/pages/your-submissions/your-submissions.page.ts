import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Storage, Submission } from './../../providers';


@Component({
  templateUrl: 'your-submissions.html'
})
export class YourSubmissionsPage {
  view: string = 'self';
  submissions: Submission[] = null;
  favorites: Submission[] = null;
  isAndroid: boolean = false;

  constructor(private navCtrl: NavController, private storage: Storage, private platform: Platform) {
       this.isAndroid = platform.is('android');
  }

  public getSubmissions() {
    if (this.submissions !== null) {
      this.storage.getMySubmissions().then(
        data => {
          console.log(data);
          this.submissions = new Array();
        }
      )
    } else {
      return this.submissions;
    }




  }

  public getFavorites() {
    if (this.favorites !== null) {
      this.storage.getFavorites().then(
        data => {
          console.log(data);
          this.favorites = new Array();
        }
      )
    } else {
      return this.favorites;
    }
  }

  showFilter() {


  }

  showSort() {

  }
  
}
