import { Submission } from './../model';
import * as Q from 'q';

/**
 * Common interface for the local storage of submissions. In a PWA context, 
 * we should use the cache of the service-worker API, in a native app context 
 * we might use SQLLite. 
 * 
 */
export interface SubmissionStorage {
    createSubmission(sub: Submission): Q.Promise<Submission>;
    readSubmission(sub: Submission): Q.Promise<Submission>;
    updateSubmission(sub: Submission): Q.Promise<boolean>; 
    deleteSubmission(sub: Submission): Q.Promise<boolean>;
    listMySubmissions(): Q.Promise<Submission[]>; 
    listFavorites(): Q.Promise<Submission[]>; 
}
