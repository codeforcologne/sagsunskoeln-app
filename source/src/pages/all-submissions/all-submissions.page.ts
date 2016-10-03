import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CategoriesProvider, AllSubmissionsProvider, GeoreportSubmission } from './../../providers/georeport';
import { Submission } from './../../providers/model';
import { AllSubmissionsDetailsPage } from './modal/submission-details.page';

@Component({
  templateUrl: 'all-submissions.html'
})
export class AllSubmissionsPage {
  public submissions: GeoreportSubmission[];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public provider: AllSubmissionsProvider,
    public categories: CategoriesProvider) {
    // is called every time this view is created
    this.loadSubmissions();
  }



  loadSubmissions() {

    this.provider.load().then(
      data => {
        this.submissions = data;
      }
    );
  }

  getIcon(submission: GeoreportSubmission): string {
    return this.categories.getIcon(submission.service_code);
  }

  getLastUpdate(submission: GeoreportSubmission): string {
    return new Date(submission.requested_datetime).toLocaleDateString();
  }

  submissionTapped(sub: GeoreportSubmission): void {

    var submission = new Submission();
    submission.comment = sub.description;
    submission.id = sub.service_request_id;
    submission.latitude = parseFloat(sub.lat);
    submission.longitude = parseFloat(sub.long);
    submission.category = sub.service_name;
    submission.service_code = sub.service_code;
    submission.date_created = sub.requested_datetime;
    submission.date_updated = sub.updated_datetime;



    let modal = this.modalCtrl.create(AllSubmissionsDetailsPage, {submission: submission});
    modal.present();
  }

  showFilter() {


  }

  showSort() {

  }
}
