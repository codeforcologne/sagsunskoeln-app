import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesProvider {

  data: any = null;

  constructor(public http: Http) {}

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('data/services.json')
        .map(res => res.json())
        .subscribe(data => {
          

          for (let category of data) {
            data.icon = this.getIcon(category.service_code);
          }
          this.data = data;
          resolve(this.data);
        });
    });

    
  }

  getIcon(code: string) {
    switch (code) {
      case '010':
        return 'bicycle';
      case '011':
        return 'trash';
      case '013':
        return 'bulb';
      case '014':
        return 'print';
      case '016':
        return 'headset';
      case '017':
        return 'body';
      case '019':
        return 'shirt';
      case '020':
        return 'wine';
      case '021':
        return 'football';
      default:
        return 'shirt';
      }
  }

}

