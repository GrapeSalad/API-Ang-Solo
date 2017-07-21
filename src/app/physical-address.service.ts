import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {geoKey} from './api-keys';

@Injectable()
export class PhysicalAddressService {

  constructor(private http: Http) { }

  getLocationsLatLong(streetAddyNum: number, streetName: string, roadType: string, city: string, state: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+streetAddyNum+"+"+streetName+"+"+roadType+",+"+city+",+"+state+"&key="+geoKey)
  }

}
