import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from './../../providers/storage/storage.sqlite'; 

@Component({
  templateUrl: 'build/pages/your-submissions/your-submissions.html',
  providers: [Storage]
})
export class YourSubmissionsPage {

  constructor(private navCtrl: NavController,  private storage: Storage) {
    this.loadSubmissions(); 
  }

  private loadSubmissions() {
    this.storage.getMySubmissions().then(
      data => {
        console.log(data);
      }
    ) 
     

  }

  private loadFavorites() {
    this.storage.getFavorites(); 
  }

}
