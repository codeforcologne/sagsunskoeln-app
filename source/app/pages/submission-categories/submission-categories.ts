import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { CategoriesProvider } from './../../providers/categories-provider/categories-provider';
import { IconsProvider } from './../../providers/icons-provider/icons-provider';
import { CategoryDescriptionPage } from './modal/category-description'

@Component({
  templateUrl: 'build/pages/submission-categories/submission-categories.html',
  providers: [CategoriesProvider, IconsProvider]
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
    let modal = this.modalCtrl.create(CategoryDescriptionPage, _category);
    modal.present();
  }


}







