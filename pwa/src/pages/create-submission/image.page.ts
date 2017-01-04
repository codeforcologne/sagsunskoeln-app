import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { CreateSubmissionCategory } from './..';
import { SubmissionBuilder } from './../../providers';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'image.html'
})
export class CreateSubmissionImages {

    // private images: Array<{ path: string, base64string: string, loading: Promise<void> }> = new Array(); 
    public theFile = {
        name: "not set"
    }; 

    constructor(private nav: NavController, navParams: NavParams, public app: App, 
        private builder: SubmissionBuilder) {

    }

    // this is annoying
    public setFile(event): void {

        let selected: FileList = event.currentTarget.files;
        if(selected.length > 0) {
            let item: File = selected.item(0); 
            this.builder.addImageAsFile(item); 
        } 

        
        console.log(JSON.stringify(event.currentTarget.value));


        // this.theFile = element.files[0]; 
    }

    public pickImage(): void {
        console.log('pick an image');
    }

    public takeImage(): void {
        console.log('take an image');
    }

    /**
     * We preload the image in a local array, since we should not call a method returning a promise directly 
     * (it might not be resolved within one tick, which means next tick calls the promise again)
     */
    public loadBase64(path: string, filename: string) {
        
      // 

    }

    public delete(title: string) {
        // remove from submission
        this.builder.removeImage(title); 
    }

    public getImageData(title: string): string {
        return this.builder.getImage(title); 
    }

    public getImages(): {title: string, data: string}[] {
        return this.builder.getSubmission().images;
    }

    // jump to next step
    step2() {
        // we skip setting the location for now
        // this.nav.push(CreateSubmission_Step2, {
        //     builder: this.builder
        // });


        this.nav.push(CreateSubmissionCategory, {
            builder: this.builder
        });
    }



    cancel() {
        this.app.getActiveNav().popToRoot(); 
        // this.nav.popToRoot();
    }





}


