import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import {Submission} from './../submission-builder/submission-builder';



@Injectable()
export class Storage {
  // spaces
  static tRefsYS: string = 'your-submission-references';
  private db: SQLite; 
  private open: boolean = false; 

  constructor(public platform: Platform) {
    this.initializeDatabase(); 

  }

  private initializeDatabase() {
     this.platform.ready().then(() => {
      console.log('Trying to setup database');
      

       this.db = new SQLite();
       this.db.openDatabase({
          name: 'data.db',
          location: 'default' 
        }).then(() => {
          this.open = true; 
          this.db.executeSql(
            `create table if not exists favorites (
                service_request_id VARCHAR(32) UNIQUE, 
                status VARCHAR(32) NOT NULL, 
                service_code INTEGER NOT NULL, 
                description TEXT, 
                agency_responsible TEXT, 
                requested_datetime TEXT,
                updated_datetime TEXT, 
                lat TEXT, 
                long TEXT ) 
            `, {}).then(
                  () => {console.log('Successfully create table "Favorites"'); }, 
                  (err) => {console.error('Unable to execute sql: ', err); }
                );

            this.db.executeSql(
              `create table if not exists mySubmissions (
                service_request_id VARCHAR(32) UNIQUE, 
                status VARCHAR(32) NOT NULL, 
                service_code INTEGER NOT NULL, 
                description TEXT, 
                agency_responsible TEXT, 
                requested_datetime TEXT,
                updated_datetime TEXT, 
                lat TEXT, 
                long TEXT ) 
            `, {}).then(
                  () => {console.log('Successfully create table "My Submissions"'); }, 
                  (err) => {console.error('Unable to execute sql: ', err); }
                );

            this.db.executeSql(
              `create table if not exists images (
                imageID INTEGER PRIMARY KEY, 
                path text NOT NULL, 
                service_request_id VARCHAR(32)
               ) 
            `, {}).then(
                  () => {console.log('Successfully create table "Images"'); }, 
                  (err) => {console.error('Unable to execute sql: ', err); }
                );
        });
      }); 
     }



  public storeSubmission(sub: Submission) {
    // do nothing yet
    console.log('Storing submission');

    this.db.transaction((tx) => {
       console.log('in transaction');

       let query = `INSERT INTO mySubmissions (service_request_id, status, service_code, description, lat, lon) VALUES(?,?,?,?,?,?)`;
       let param = [sub.id, 'Unpublished', sub.service_code, sub.comment, sub.latitude, sub.longitude];  
       tx.executeSql(query, param); 

      }).then(
        () =>  {console.log('Successfully stored submission'); }, 
        (error)   =>  {console.error('Unable to execute sql: ', error); }   
      ); 

    // TODO, store image as file
  }



  /** Returns a set of IDs of the user submissions */
  private getReferences(): String[] {
    // do nothing yet
    console.log('Storing submission');
    return new String[10]; 
  }

  public getMySubmissions(): Promise<Submission[]> {
    return  new Promise((resolve, reject) => {
      console.log('Getting submissions');
    });


  }

  public getFavorites() {
    console.log('Getting favorites');
  }

}

