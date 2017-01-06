import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import { Submission } from './../model';
import { SubmissionStorage } from './storage';
import * as Q from 'q';

@Injectable()
export class SubmissionsCache implements SubmissionStorage {

    public createSubmission(sub: Submission): Q.Promise<Submission> {
        throw new Error("Not implemented");
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

    public listMySubmissions(): Q.Promise<Submission[]> {
        throw new Error("Not implemented");
    };

    public listFavorites(): Q.Promise<Submission[]> {
        throw new Error("Not implemented");
    };
}