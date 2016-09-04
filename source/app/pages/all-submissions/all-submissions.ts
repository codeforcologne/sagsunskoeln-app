import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AllSubmissionsProvider} from './../../providers/all-submissions-provider/all-submissions-provider'; 

@Component({
  templateUrl: 'build/pages/all-submissions/all-submissions.html',
    providers: [AllSubmissionsProvider] 
})
export class AllSubmissionsPage {
private submissions : any; 

  constructor(public navCtrl: NavController, public provider : AllSubmissionsProvider) {
    this.loadSubmissions(); 

  }

  loadSubmissions() {
    this.provider.load().then(
      data => {
        this.submissions = data; 
      }
    )
  }

  showFilter() {


  }

  showSort() {
    
  }
}
