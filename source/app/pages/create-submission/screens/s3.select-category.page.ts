import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CreateSubmissionDescription} from './s4.add-comment.page';
import {CategoriesProvider} from './../../../providers/categories-provider/categories-provider';
import {SubmissionBuilder} from './../../../providers/submission-builder/submission-builder';



@Component({
    templateUrl: 'build/pages/create-submission/screens/s3.select-category.html',
    providers: [CategoriesProvider]
})
export class CreateSubmissionCategory {
    private categories: any;
    private builder: SubmissionBuilder;
    public categoryChoice: string = '';  

    constructor(private nav: NavController,
                navParams: NavParams,
                categoriesProvider: CategoriesProvider) {
        this.builder = navParams.get('builder');
        this.loadCategories(categoriesProvider);
    }

    loadCategories(categoriesProvider: CategoriesProvider) {
        categoriesProvider.load()
            .then(data => {
                this.categories = data;
             }
            );
    } 

    step4() {
        this.nav.push(CreateSubmissionDescription, {
            builder: this.builder
        });
    }

    cancel() {
        this.nav.popToRoot(); 
    }



}


