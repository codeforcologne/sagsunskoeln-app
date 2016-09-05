import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from './../../providers/storage/storage'

@Component({
  templateUrl: 'build/pages/your-submissions/your-submissions.html',
  providers: [Storage]
})
export class YourSubmissionsPage {

  constructor(private navCtrl: NavController,  private storage: Storage) {
    this.loadSubmissions(); 
  }

  private loadSubmissions() {
    this.storage.getYourSubmissions(); 

  }

  private loadFavorites() {
    this.storage.getFavorites(); 
  }

}
