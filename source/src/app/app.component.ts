import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import * as pages from './../pages';


@Component({
  templateUrl: 'app.html'
})
export class SagsUnsApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = pages.StartPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Start', component: pages.StartPage },
      { title: 'Kategorien', component: pages.SubmissionCategoriesPage },
      { title: 'Neues Anliegen', component: pages.CreateSubmissionImages   },
      { title: 'Deine Meldungen', component: pages.YourSubmissionsPage },
      { title: 'Alle Meldungen', component: pages.AllSubmissionsPage },
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
    this.menu.close(); 
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
