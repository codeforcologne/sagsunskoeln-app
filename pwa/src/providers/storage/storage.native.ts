import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { NativeStorage } from 'ionic-native';

import { Submission } from './../model'
import { SubmissionStorage } from './storage';
import * as Q from 'q';

/*
  Simple NativeStorage is deprecated, see storage.sqlite instead
*/


@Injectable()
export class SimpleStorage implements SubmissionStorage {
  // spaces
  static tRefsYS: string = 'your-submission-references';


  constructor() { }




  /** Returns a set of IDs of the user submissions 
  private getReferences(): String[] {

    NativeStorage.getItem(SimpleStorage.tRefsYS).then(
      // array of references
      data => console.log(data),
      error => console.error(error)
    );
    return new String[10];
  }*/

/*
  public getMySubmissions(): Promise<Submission[]> {
    return new Promise((resolve, reject) => {
      // returns a list of all items
      NativeStorage.getItem(SimpleStorage.tRefsYS).then(

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
  */


  public createSubmission(sub: Submission): Q.Promise<Submission> {
    var deferred: Q.Deferred<Submission> = Q.defer<Submission>();
    // store submission
    NativeStorage.setItem(sub.id, sub).then(
      () => {
        // store reference to submission 
        // get all references first
        NativeStorage.getItem(SimpleStorage.tRefsYS).then(
          // array of references
          data => {

            // add current reference
            data.push(sub.id);

            // and store back
            NativeStorage.setItem(SimpleStorage.tRefsYS, data).then(
              () => {

                // Attention: this is just the start, implementation not finished
                console.log('Stored reference!'); 
              },
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

    return deferred.promise;


  }

  public readSubmission(sub: Submission): Q.Promise<Submission> {
    throw new Error("Not implemented");
  }

  public updateSubmission(sub: Submission): Q.Promise<boolean> {
    throw new Error("Not implemented");
  }

  public deleteSubmission(sub: Submission): Q.Promise<boolean> {
    throw new Error("Not implemented");
  };

  public listRecentSubmissions(): Q.Promise<Submission[]> {
    throw new Error("Not implemented");
  };

  public listMySubmissions(): Q.Promise<Submission[]> {
    throw new Error("Not implemented");
  };

  public listFavorites(): Q.Promise<Submission[]> {
    throw new Error("Not implemented");
  };
}

