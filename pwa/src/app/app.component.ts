import { CreateSubmissionImages } from './../pages/create-submission/image.page';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import * as pages from './../pages';

@Component({
  templateUrl: 'app.html'
})
export class SagsUnsApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = pages.DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Willkommen', component: pages.DashboardPage },
      { title: 'Kategorien', component: pages.ListCategoriesPage },
      { title: 'Neues Anliegen', component: pages.CreateSubmissionImages   },
      { title: 'Deine Meldungen', component: pages.ListMySubmissionsPage },
      { title: 'Alle Meldungen', component: pages.ListAllSubmissionsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     //  StatusBar.styleDefault();
      // Splashscreen.hide();
      this.nav.setRoot(pages.DashboardPage); 
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
