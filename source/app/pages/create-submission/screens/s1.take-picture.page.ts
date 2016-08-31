import {Page, NavController, NavParams} from 'ionic-angular';
import {ImagePicker} from 'ionic-native';
import {Camera} from 'ionic-native';
import {CreateSubmission_Step2} from './s2.get-coordinates.page'
import {CreateSubmission_Step3} from './s3.select-category.page'
import {StartPage} from './../../start/start'
import {SubmissionBuilder} from './../../../providers/submission-builder/submission-builder'
import 'rxjs/add/operator/map';

@Page({
    templateUrl: 'build/pages/create-submission/screens/s1.take-picture.html', 
    providers: [SubmissionBuilder]
})
export class CreateSubmission_Step1 {
    
    constructor(private nav: NavController, navParams: NavParams, 
                private builder: SubmissionBuilder) {
        
    }


    pickImage() {
        console.log("pick an image");

        let options = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };
        ImagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.builder.addImage("Neues Bild", results[i]);
            }
        }, (err) => {
        });
    }

    takeImage() {
    	   let options = {
            destinationType: Camera.DestinationType.DATA_URL
            , sourceType: Camera.PictureSourceType.CAMERA
            , encodingType: Camera.EncodingType.JPEG
            , quality: 100
            , allowEdit: false
            , saveToPhotoAlbum: false
        };
        Camera.getPicture(options).then(
            res => {
                console.log("We have picked a picture!");
                this.builder.addImage("Neues Bild", "data:image/jpeg;base64," + res);
            }
        );
    }


    public getImages() {
        return this.builder.getImages(); 
    }

    // jump to next step
    step2() {

    

        // we skip setting the location for now
        // this.nav.push(CreateSubmission_Step2, {
        //     builder: this.builder
        // });


        this.nav.push(CreateSubmission_Step3, {
            builder: this.builder
        });
    }



    cancel() {
        this.nav.popToRoot()
    }



  

}


