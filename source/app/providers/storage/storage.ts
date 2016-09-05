import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from 'ionic-native';

import {Submission} from './../submission-builder/submission-builder'

@Injectable()
export class Storage {

  constructor(private http: Http) {}


  public storeSubmission(sub: Submission) {
    console.log("trying to store: "+sub);
     NativeStorage.setItem(sub.id, 
            sub
        ).then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
        );
  }

  public getYourSubmissions() {

    // returns a list of all items
    NativeStorage.getItem("yourSubmissions").then(
      // array of references
      data => console.log(data),
      error => console.error(error) 
    ) ; 
  }

  public getFavorites() {
    // returns a list of all items
    NativeStorage.getItem("favorites").then(
      // array of references
      data => console.log(data),
      error => console.error(error) 
    ) ;
  } 

}

