import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { NativeStorage } from 'ionic-native';

import {Submission} from './../model'

@Injectable()
export class Storage {
  // spaces
  static tRefsYS: string = 'your-submission-references';


  constructor() { }


  public storeSubmission(sub: Submission) {



    // store submission
    NativeStorage.setItem(sub.id, sub).then(
      () => {
        // store reference to submission 


        // get all references first
        NativeStorage.getItem(Storage.tRefsYS).then(
          // array of references
          data => {

            // add current reference
            data.push(sub.id);

            // and store back
            NativeStorage.setItem(Storage.tRefsYS, data).then(
              () => { console.log('Stored item!'); },
              // technical debt: roll back, submissions will be lost
              error => { console.error('Error storing references', error) }
            );


          },
          // technical debt: roll back, submissions will be lost
          error => console.error(error)
        );
      },
      error => console.error('Error storing item', error)
    );
  }



  /** Returns a set of IDs of the user submissions */
  private getReferences(): String[] {

    NativeStorage.getItem(Storage.tRefsYS).then(
      // array of references
      data => console.log(data),
      error => console.error(error)
    );
    return new String[10];
  }

  public getMySubmissions(): Promise<Submission[]> {
    return new Promise((resolve, reject) => {
      // returns a list of all items
      NativeStorage.getItem(Storage.tRefsYS).then(

        // array of references
        data => {
          resolve(data);
          let result = new Submission[data.array.length];

          data.array.forEach(element => {
            NativeStorage.getItem(element).then(
              item => {
                resolve(item);
                result.push(item);
              },
              error => {
                console.log('Failed to retrieve Item: ', element);
                console.log('Error Message: ', error);
              }
            );
          });
          
          console.log(data);
        },
        error => {
          console.log('Failed to retrieve my submissions');
          console.log('Error Message: ', error);
        }
      );

    });


  }

  public getFavorites() {

    // returns a list of all items
    NativeStorage.getItem('favorites').then(
      // array of references
      data => console.log(data),
      error => console.error(error)
    );
  }

}

