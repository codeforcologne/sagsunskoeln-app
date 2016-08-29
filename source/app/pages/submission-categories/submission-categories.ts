import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CategoriesProvider} from './../../providers/categories-provider/categories-provider';
import {IconsProvider} from './../../providers/icons-provider/icons-provider';

@Component({
  templateUrl: 'build/pages/submission-categories/submission-categories.html',
  providers: [CategoriesProvider, IconsProvider] 
})
export class SubmissionCategoriesPage {
  icons: string[];
  public categories: any;


  constructor(private navCtrl: NavController, public categoriesProvider: CategoriesProvider, public iconsProvider: IconsProvider) {
    this.loadCategories(); 
  }

  loadCategories() {
    this.categoriesProvider.load()
      .then(data => {
        this.categories = data;
        this.loadIcons(this.categories);
      }

      );
  }


  loadIcons(data: any) {
    for (let category of data) {
      data.icon = this.iconsProvider.getIcon(category.service_code);
    }
  }

}







