import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IconsProvider {

  constructor(private http: Http) {}

   getIcon(code: string) {
    switch (code) {
      case "10":
        return "bicycle";
      case "11":
        return "trash";
      case "13":
        return "bulb";
      case "14":
        return "print";
      case "16":
        return "headset";
      case "17":
        return "body";
      case "19":
        return "shirt";
      case "20":
        return "wine";
      case "21":
        return "football";
      default:
        return "shirt";
    }
  }

}

