import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import { Submission } from './../model';
import { SubmissionStorage } from './storage';
import * as Q from 'q';
import { Http } from '@angular/http';

@Injectable()
export class SubmissionsCache implements SubmissionStorage {

    constructor(public http: Http) {}

    public createSubmission(sub: Submission): Q.Promise<Submission> {
        throw new Error("Not implemented");
    }

    public readSubmission(sub: Submission): Q.Promise<Submission> {
        throw new Error("Not implemented");
    }

    public updateSubmission(sub: Submission): Q.Promise<boolean> {
        throw new Error("Not implemented");
    }

    public markSubmission(sub: Submission): Q.Promise<boolean> {
        var deferred: Q.Deferred<boolean> = Q.defer<boolean>();

        this.http.post("/mark", sub)
            .map(res => res.json())
            .subscribe(data => {
                deferred.resolve; 
            }); 

        return deferred.promise; 
    }

    public deleteSubmission(sub: Submission): Q.Promise<boolean> {
        throw new Error("Not implemented");
    };

    public listMySubmissions(): Q.Promise<Submission[]> {
        throw new Error("Not implemented");
    };

    public listFavorites(): Q.Promise<Submission[]> {
        throw new Error("Not implemented");
    };


}