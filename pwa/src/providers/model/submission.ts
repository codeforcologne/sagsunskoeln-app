import { Injectable } from '@angular/core';

@Injectable()
export class Submission {
  id: string; // profil#timestamp 
  category: string; 
  latitude: number;
  longitude: number;
  images: Array<{ title: string, data: string }>;
  comment: string; 
  service_code: string;
  date_created: string; // as iso string 
  date_updated: string;  
  // status
  // submission Date
  // profil

  constructor() {
    // id (needed as reference in storage) is simply current time
    this.date_created = new Date().toISOString(); 
    this.date_updated = this.date_created; 
    this.id = 'id#' + this.date_created; 
    this.images = Array(); 
  }
}