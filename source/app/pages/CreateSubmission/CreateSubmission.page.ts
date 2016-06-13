import {Page} from 'ionic-angular';
import {ImagePicker} from 'ionic-native';
// import {Camera} from 'ionic-native';



class Submission {
    images: String[];
    constructor() {
        
    }

    addImage(url: string) {
        this.images.push(url);
        console.log("Image:" + url);
    }
}

@Page({
    templateUrl: 'build/pages/CreateSubmission/CreateSubmission.html'
})
export class CreateSubmissionPage {
    meldung: Submission;

    constructor() {
        this.meldung = new Submission();
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
                this.meldung.addImage(results[i]);
            }
        }, (err) => {
        });
    }

    takeImage() {
        console.log("take an image");
    	/*
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
            }
            );
            */
    }



}


