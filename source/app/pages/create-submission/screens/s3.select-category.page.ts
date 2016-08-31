import {Page, NavController, NavParams} from 'ionic-angular';
import {CreateSubmission_Step4} from './s4.add-comment.page'
import {StartPage} from './../../start/start'
import {CategoriesProvider} from './../../../providers/categories-provider/categories-provider';
import {IconsProvider} from './../../../providers/icons-provider/icons-provider';
import {SubmissionBuilder} from './../../../providers/submission-builder/submission-builder'

@Page({
    templateUrl: 'build/pages/create-submission/screens/s3.select-category.html',
    providers: [CategoriesProvider, IconsProvider]
})
export class CreateSubmission_Step3 {
    public categories: any;
    private builder: SubmissionBuilder;

    constructor(private nav: NavController,
                navParams: NavParams,
                categoriesProvider: CategoriesProvider,
                iconsProvider: IconsProvider) {
                    this.builder = navParams.get('builder');
        this.loadCategories(categoriesProvider, iconsProvider);
    }

    loadCategories(categoriesProvider: CategoriesProvider, iconsProvider: IconsProvider) {
        categoriesProvider.load()
            .then(data => {
                for (let category of data) {
                    data.icon = iconsProvider.getIcon(category.service_code);
                }
                this.categories = data;
            }
            );
    }

    // Get location
    step4() {
        this.nav.push(CreateSubmission_Step4);
    }

    cancel() {
        this.nav.popToRoot(); 
    }



}


