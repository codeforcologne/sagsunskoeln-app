import {Page, NavController} from 'ionic-angular';
import {AllSubmissionsProvider} from './../../providers/all-submissions-provider/all-submissions-provider'; 
/*
  Display last 50 submissions (requests online API)
*/
@Page({
  templateUrl: 'build/pages/all-submissions/all-submissions.html',
  providers: [AllSubmissionsProvider] 
})
export class AllSubmissionsPage {
  private submissions : any; 

  constructor(public nav: NavController, public provider : AllSubmissionsProvider) {
    this.loadSubmissions(); 

  }

  loadSubmissions() {
    this.provider.load().then(
      data => {
        this.submissions = data; 
      }
    )
  }
}
