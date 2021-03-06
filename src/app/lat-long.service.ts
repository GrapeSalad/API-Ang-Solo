import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {geoKey} from './api-keys';

@Injectable()
export class LatLongService {

  constructor(private http: Http) { }

  getLocationsPhysicalAddress(lat: string, long: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key="+geoKey);
  }

}
