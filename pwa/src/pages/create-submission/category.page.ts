import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateSubmissionDescription } from './..';
import { CategoriesProvider, SubmissionBuilder } from './../../providers';



@Component({
    templateUrl: 'category.html'
})
export class CreateSubmissionCategory {
    public categories: any;
    public builder: SubmissionBuilder;
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


