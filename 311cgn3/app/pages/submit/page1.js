import {
    Page, Alert, NavController
}
from 'ionic-angular';

import {
    Geolocation, Camera
}
from 'ionic-native';
import {
    NgZone
}
from 'angular2/core';


@
Page({
    templateUrl: 'build/pages/submit/page1.html'
})
export class Page1 {
    static get parameters() {
        return [[NavController], [NgZone]];
    }

    constructor(nav, ngzone) {
        // test
        this.zone = ngzone;
        this.nav = nav;


        this.location = "0";

        Geolocation.getCurrentPosition().then((resp) => {
            this.location = resp.coords;
            this.location = resp.coords.latitude + ", " + resp.coords.longitude;
            //resp.coords.latitude
            //resp.coords.longitude
        })
    }
    doAlert() {
        let alert = Alert.create({
            title: 'New Friend!'
            , message: 'Your friend, Obi wan Kenobi, just accepted your friend request!'
            , buttons: ['Ok']
        });
        this.nav.present(alert);
    }


    getPicture() {

        var options = {
            destinationType: Camera.DestinationType.DATA_URL
            , sourceType: Camera.PictureSourceType.CAMERA
            , encodingType: Camera.EncodingType.JPEG
            , quality: 100
            , allowEdit: false
            , saveToPhotoAlbum: false
        };

        navigator.camera.getPicture((data) => {
            var imgdata = "data:image/jpeg;base64," + data;
            this.zone.run(() => this.image = imgdata);
        }, (error) => {
            alert(error);
        }, options);
    }

    getlocation() {
        return "Hello World"
    };
}