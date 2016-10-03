import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from './../../providers/storage';

@Component({
  templateUrl: 'your-submissions.html'
})
export class YourSubmissionsPage {
  view: string = 'self';


  constructor(private navCtrl: NavController, private storage: Storage) {
  }

  public getSubmissions() {
    this.storage.getMySubmissions().then(
      data => {
        console.log(data);
      }
    )


  }

  public getFavorites() {
    this.storage.getFavorites();
  }

}
