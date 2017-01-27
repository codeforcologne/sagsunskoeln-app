import { SubmissionsCache } from './../providers/storage/storage.sw';
import { SubmissionStorage } from './../providers/storage/storage';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SagsUnsApp } from './app.component';
import * as pages from '../pages/';
import * as providers from './../providers';

@NgModule({
  declarations: [
    SagsUnsApp,
    pages.DashboardPage,
    pages.ListAllSubmissionsPage,
    pages.ListCategoriesPage,
    pages.SubmissionCategoriesDetails,
    pages.ListMySubmissionsPage,
    pages.CreateSubmissionImages,
    pages.CreateSubmissionCategory,
    pages.CreateSubmissionDescription,
    pages.CreateSubmissionLocation,
    pages.ShowSubmissionPage,
    pages.AllSubmissionsDetailsPage
  ],
  imports: [
    IonicModule.forRoot(SagsUnsApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SagsUnsApp,
    pages.DashboardPage,
    pages.ListAllSubmissionsPage,
    pages.ListCategoriesPage,
    pages.SubmissionCategoriesDetails,
    pages.ListMySubmissionsPage,
    pages.CreateSubmissionImages,
    pages.CreateSubmissionCategory,
    pages.CreateSubmissionDescription,
    pages.CreateSubmissionLocation,
    pages.ShowSubmissionPage,
    pages.AllSubmissionsDetailsPage
  ],
  providers: [
    { 
      provide: ErrorHandler, 
      useClass: IonicErrorHandler 
    },
    { 
      provide: providers.SubmissionStorage, 
      useClass: providers.SubmissionsCache
    }, 
    providers.AllSubmissionsProvider,
    providers.CategoriesProvider,
    providers.GeoreportSubmission,
   
    providers.Submission,
    providers.SubmissionBuilder

  ]
})
export class AppModule { }
