import {Page, NavController, NavParams} from 'ionic-angular';
import {CreateSubmission_Step3} from './s3.select-category.page'
import {StartPage} from './../../start/start'
import {Geolocation} from 'ionic-native';
import {SubmissionBuilder} from './../../../providers/submission-builder/submission-builder'

@Page({
    templateUrl: 'build/pages/create-submission/screens/s2.get-coordinates.html'
})
export class CreateSubmission_Step2 {
    builder: SubmissionBuilder;
    coord: string;

    constructor(private nav: NavController, navParams: NavParams) {
        console.log(navParams);

        this.builder = navParams.get("builder");
        this.acquireLocation();
    }



    acquireLocation() {
        console.log("Trying to acquire coordinates");
        if(this.builder.hasLocation()) {
            return this.builder.getLocation();
        } else {
Geolocation.getCurrentPosition().then((resp) => {
            console.log("Coordinates are " + resp.coords.latitude + "," + resp.coords.longitude);
            this.builder.setLocation(resp.coords);

            return resp.coords; 
        });
        }
        

    }


    // Get location
    printLocation() {
        return this.builder.getLocation();
    }


    step3() {
        console.log("Switching to next step 3.");

        this.nav.push(CreateSubmission_Step3);
    }

    cancel() {
        this.nav.push(StartPage)
    }



}

