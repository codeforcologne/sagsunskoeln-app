import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import { Submission } from './../model';
import { SubmissionStorage } from './storage';
import * as Q from 'q';


@Injectable()
export class SQLStorage implements SubmissionStorage {
  // spaces
  static tRefsYS: string = 'your-submission-references';
  public db: SQLite;
  public open: boolean = false;

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
          () => { console.log('Successfully create table "Favorites"'); },
          (err) => { console.error('Unable to execute sql: ', err); }
          );

        this.db.executeSql(
          `create table if not exists submissions (
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
          () => { console.log('Successfully create table "My Submissions"'); },
          (err) => { console.error('Unable to execute sql: ', err); }
          );

        this.db.executeSql(
          `create table if not exists images (
                imageID INTEGER PRIMARY KEY, 
                name text NOT NULL, 
                path text NOT NULL               ) 
            `, {}).then(
          () => { console.log('Successfully create table "Images"'); },
          (err) => { console.error('Unable to execute sql: ', err); }
          );
      });
    });
  }




  public createSubmission(sub: Submission): Q.Promise<Submission> {
     var deferred: Q.Deferred<Submission> = Q.defer<Submission>();

    // do nothing yet
    console.log('Storing submission');

    this.db.transaction((tx) => {
      console.log('in transaction');

      let queryInsertSubmission = `INSERT INTO mySubmissions (service_request_id, status, service_code, description, lat, lon) VALUES(?,?,?,?,?,?)`;
      let queryInsertImage = `INSERT INTO images (name, path) VALUES(?,?)`;

      let param = [sub.id, 'Unpublished', sub.service_code, sub.comment, sub.latitude, sub.longitude];
      tx.executeSql(queryInsertSubmission, param);
      sub.images.forEach((img) => {
        tx.executeSql(queryInsertImage, [img.title, img.data]);
      });


    }).then(
      () => { 
        console.log('Successfully stored submission'); 
        deferred.resolve(sub); 
      },
      (error) => { 
        console.error('Unable to execute sql: ', error); 
        deferred.reject(error); 
      }
      );

    // TODO, store image as file
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
    var deferred: Q.Deferred<Submission[]> = Q.defer<Submission[]>();
    console.log('Getting my submission');

    let q: string = 'SELECT * FROM cached';
    this.db.executeSql(q, {}).then(() => {
      deferred.resolve(null);
    });

    return deferred.promise;
  };

  public listMySubmissions(): Q.Promise<Submission[]> {
    var deferred: Q.Deferred<Submission[]> = Q.defer<Submission[]>();
    console.log('Getting my submission');

    let q: string = 'SELECT * FROM submissions';
    this.db.executeSql(q, {}).then(() => {
      deferred.resolve(null);
    });

    return deferred.promise;
  };


  public listFavorites(): Q.Promise<Submission[]> {
    var deferred: Q.Deferred<Submission[]> = Q.defer<Submission[]>();

    let q: string = 'SELECT * FROM favorites';
    this.db.executeSql(q, {}).then(() => {
      deferred.resolve(null);
    });

    return deferred.promise;
  };

  public markSubmission(sub: Submission): Q.Promise<boolean> {
    throw new Error("Not implemented");
  }
}

