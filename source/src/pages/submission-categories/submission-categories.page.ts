import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';

import { CategoriesProvider } from './../../providers/georeport';
import { SubmissionCategoriesDetails } from './modal/category-details.page'

@Component({
  templateUrl: 'submission-categories.html'
})
export class SubmissionCategoriesPage {
  icons: string[];
  public categories: any;
  counter: number = 0;

  constructor(private navCtrl: NavController, 
        public categoriesProvider: CategoriesProvider, 
        // public iconsProvider: IconsProvider, 
        public modalCtrl: ModalController) {
    this.loadCategories();
  }

  private loadCategories() {
    this.categoriesProvider.load()
      .then(data => {

        // for (let category of data) {
        //   data.icon = this.iconsProvider.getIcon(category.service_code);
        // }
        this.categories = data;
      }

      );
  }

  loadDescription(_category: any) {
    let modal = this.modalCtrl.create(SubmissionCategoriesDetails, _category);
    modal.present();
  }


}







