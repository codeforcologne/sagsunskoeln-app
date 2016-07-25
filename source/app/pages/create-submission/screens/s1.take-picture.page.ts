import {Page, NavController, NavParams} from 'ionic-angular';
import {ImagePicker} from 'ionic-native';
import {Camera} from 'ionic-native';
import {CreateSubmission_Step2} from './s2.get-coordinates.page'
import {StartPage} from './../../start/start'
import {SubmissionBuilder} from './../../../providers/submission-builder/submission-builder'
import 'rxjs/add/operator/map';

@Page({
    templateUrl: 'build/pages/create-submission/screens/s1.take-picture.html'
})
export class CreateSubmission_Step1 {
    builder: SubmissionBuilder;
    photos: Array<{ title: string, content: any }>;

    constructor(private nav: NavController, navParams: NavParams) {
        this.builder = navParams.get('builder');
        this.photos = [];

        this.photos.push({
            title: "Beispielbild",
            content: "nothing"
        });

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
                this.builder.addImage(results[i]);
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
                console.log("We have taken a picture!");
                this.builder.addImage(res);
            }
        );
    }

    push(ph: any) {
        this.photos.push({
            title: "Neues Bild",
            content: ph
        });
    }

    // Get location
    step2() {
        console.log("Jump to step 2");

        this.nav.push(CreateSubmission_Step2, {
            builder: this.builder
        });
    }



    cancel() {
        this.nav.push(StartPage)
    }



    addItem() {
        this.photos.push({
            title: "Ein anderes Bild",
            content: "nothing"
        }
        );
    }


}


