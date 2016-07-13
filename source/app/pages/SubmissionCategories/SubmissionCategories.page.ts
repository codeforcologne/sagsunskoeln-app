
import {Page, NavController, NavParams} from 'ionic-angular';

import {CategoriesProvider} from './../../providers/categories-provider/categories-provider'; 


@Page({
    templateUrl: 'build/pages/SubmissionCategories/SubmissionCategories.html', 
    providers: [CategoriesProvider] 
})
export class SubmissionCategoriesPage {
    icons: string[];
    public categories: any; 

    constructor(private nav: NavController, navParams: NavParams, public categoriesProvider : CategoriesProvider) {
        this.loadCategories(); 
    }


    loadCategories() {
        this.categoriesProvider.load()
            .then(data => {
                this.categories = data
            }
            
        ); 
       // this.initIcons(); 
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
