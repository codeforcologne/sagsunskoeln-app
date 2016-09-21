import { Page, NavController, NavParams } from 'ionic-angular';
import { Camera, File } from 'ionic-native';
import { CreateSubmissionCategory } from './s3.select-category.page';
import { SubmissionBuilder } from './../../../providers/model';
import 'rxjs/add/operator/map';

@Page({
    templateUrl: 'build/pages/create-submission/screens/s1.take-picture.html',
    providers: [SubmissionBuilder]
})
export class CreateSubmissionImages {

    private images: Array<{ path: string, base64string: string, loading: Promise<void> }> = new Array(); 

    constructor(private nav: NavController, navParams: NavParams,
        private builder: SubmissionBuilder) {

    }


    pickImage() {
        console.log('pick an image');
/*
        let options = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };
        
        ImagePicker.getPictures(options).then((results) => {
            results.array.forEach(path => {
                console.log('We have picked a picture at: ', JSON.stringify(path));
                this.builder.addImage('Neues Bild', path);
            });

            for (var i = 0; i < results.length; i++) {

            }
        }, (err) => {
        });*/

         let options = {
            destinationType: Camera.DestinationType.FILE_URI
            , sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            , encodingType: Camera.EncodingType.JPEG
            , mediaType: Camera.MediaType.PICTURE
            , quality: 50
            , allowEdit: true
            , saveToPhotoAlbum: false
        };
        Camera.getPicture(options).then(
            res => {
                console.log('We have picked pictures at: ', JSON.stringify(res));
                this.builder.addImage('Neues Bild', res);
                this.loadBase64(res); 
            }
        );
    }

    takeImage() {
        let options = {
            destinationType: Camera.DestinationType.FILE_URI
            , sourceType: Camera.PictureSourceType.CAMERA
            , encodingType: Camera.EncodingType.JPEG
            , mediaType: Camera.MediaType.PICTURE
            , quality: 50
            , allowEdit: true
            , saveToPhotoAlbum: false
        };
        Camera.getPicture(options).then(
            res => {
                console.log('We have taken a picture at: ', JSON.stringify(res));
                this.builder.addImage('Neues Bild', res);
                this.loadBase64(res); 
            }
        );
    }

    /**
     * We preload the image in a local array, since we should not call a method returning a promise directly (it might not be resolved within one tick, which means 
     * next tick calls the promise again)
     */
    public loadBase64(path: string) {
        
        let loading = File.readAsDataURL(path).then((base64string) => {
            this.images.find(img => img.path === path).base64string = base64string;  
        }); 
        // we keep the promise in cache to prevent buildup
        this.images.push({path, base64string: null, loading}); 

    }

    public delete(path: string) {
        console.log('Deleteing: ', path);

        // delete from cache
        this.images.splice(this.images.findIndex(img => img.path === path), 1); 

        // remove from submission
        this.builder.removeImage(path); 
    }

    public getImage(path: string): string {
        let res = this.images.find(img => img.path === path); 

        if (res !== undefined) {
            return res.base64string; 
        } else {
            this.loadBase64(path); 
        }
    }
    public getImages() {
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
        this.nav.popToRoot();
    }





}


