
import {Page, NavController, NavParams} from 'ionic-angular';

import {CategoriesProvider} from './../../providers/categories-provider/categories-provider'; 
import {IconsProvider} from './../../providers/icons-provider/icons-provider'; 

@Page({
    templateUrl: 'build/pages/submission-categories/submission-categories.html', 
    providers: [CategoriesProvider, IconsProvider] 
})
export class SubmissionCategoriesPage {
    icons: string[];
    public categories: any; 

    constructor(private nav: NavController, navParams: NavParams, public categoriesProvider : CategoriesProvider, public iconsProvider : IconsProvider) {
        this.loadCategories(); 
    }


    loadCategories() {
        this.categoriesProvider.load()
            .then(data => {
                this.categories = data; 
                this.loadIcons(this.categories); 
            }
            
        ); 
       // this.initIcons(); 
    }

      
    
    loadIcons(data: any) {
      for(let category of data) {
        data.icon = this.iconsProvider.getIcon(category.service_code); 
      }
    }

    initIcons() {
        this.categories.push({
            title: 'Altkleidercontainer',
            description: 'zu ergänzen',
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
                this.categories.push({
            title: 'Ampel defekt',
            description: 'zu ergänzen',
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
                this.categories.push({
            title: 'Parkscheinautomat defekt',
            description: 'zu ergänzen',
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
                this.categories.push({
            title: 'Schrottfahrzeuge/Fahrräder',
            description: 'zu ergänzen',
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
                this.categories.push({
            title: 'Straßenbaustellen',
            description: 'zu ergänzen',
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });

    }
}
