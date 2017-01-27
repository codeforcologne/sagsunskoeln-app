import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SubmissionStorage, SubmissionsCache, Submission } from './../../providers';


@Component({
  templateUrl: 'list-my-submissions.html'
})
export class ListMySubmissionsPage {
  view: string = 'self';
  submissions: Submission[] = null;
  favorites: Submission[] = null;
  isAndroid: boolean = false;

  // TechDeb: Parameter should be SubmissionStorage (Interface), but can't compile
  constructor(private navCtrl: NavController, private storage: SubmissionsCache, private platform: Platform) {
       this.isAndroid = platform.is('android');
  }

  public getSubmissions() {
    if (this.submissions !== null) {
      this.storage.listMySubmissions().then(
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
      this.storage.listFavorites().then(
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
