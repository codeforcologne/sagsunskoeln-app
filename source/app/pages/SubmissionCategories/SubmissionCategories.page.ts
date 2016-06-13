
import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/SubmissionCategories/SubmissionCategories.html'
})
export class SubmissionCategoriesPage {
    icons: string[];
    categories: Array<{ title: string, description: string, icon: string }>;

    constructor(private nav: NavController, navParams: NavParams) {


        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];

        this.categories = [];
        this.initIcons(); 
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
