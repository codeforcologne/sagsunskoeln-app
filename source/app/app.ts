import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { StartPage } from './pages/start/start';
import { SubmissionCategoriesPage } from './pages/submission-categories/submission-categories';
import { AllSubmissionsPage } from "./pages/all-submissions/all-submissions";
import { CreateSubmissionPage } from "./pages/create-submission/create-submission";


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Start', component: StartPage },
      { title: 'Kategorien', component: SubmissionCategoriesPage },
      { title: 'Neues Anliegen', component: CreateSubmissionPage },
            // { title: 'Deine Meldungen', component: YourSubmissionsPage },
     { title: 'Alle Meldungen', component: AllSubmissionsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
