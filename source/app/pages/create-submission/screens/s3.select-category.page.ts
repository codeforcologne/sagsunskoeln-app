import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import {CreateSubmission_Step4} from './s4.add-comment.page'
import {StartPage} from './../../start/start'
import {CategoriesProvider} from './../../../providers/categories-provider/categories-provider';
import {SubmissionBuilder} from './../../../providers/submission-builder/submission-builder'



@Component({
    templateUrl: 'build/pages/create-submission/screens/s3.select-category.html',
    providers: [CategoriesProvider]
})
export class CreateSubmission_Step3 {
    private categories: any;
    private builder: SubmissionBuilder;
    private forwardDisabled: string = "true"; 
    public categoryChoice: string = "";  

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
        this.nav.push(CreateSubmission_Step4, {
            builder: this.builder
        });
    }

    cancel() {
        this.nav.popToRoot(); 
    }



}


