import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SagsUnsApp } from './app.component';
import * as pages from './../pages';
import * as providers from './../providers';

@NgModule({
  declarations: [
    SagsUnsApp,
    pages.StartPage,
    pages.AllSubmissionsPage,
    pages.AllSubmissionsDetailsPage, 
    pages.CreateSubmissionImages,
    pages.CreateSubmissionCategory,
    pages.CreateSubmissionDescription,
    pages.CreateSubmissionStepLocation, 
    pages.SubmissionCategoriesPage,
    pages.SubmissionCategoriesDetails, 
    pages.SubmissionDetailsPage,
    pages.YourSubmissionsPage
  ],
  imports: [
    IonicModule.forRoot(SagsUnsApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SagsUnsApp,
   pages.StartPage,
    pages.AllSubmissionsPage,
    pages.AllSubmissionsDetailsPage, 
    pages.CreateSubmissionImages,
    pages.CreateSubmissionCategory,
    pages.CreateSubmissionDescription,
    pages.SubmissionCategoriesPage,
    pages.SubmissionCategoriesDetails, 
    pages.SubmissionDetailsPage,
    pages.YourSubmissionsPage
  ],
  providers: [
    providers.AllSubmissionsProvider,
    providers.CategoriesProvider,
    providers.GeoreportSubmission,
    providers.Storage,
    providers.Submission,
    providers.SubmissionBuilder
  ]
})
export class AppModule { }
