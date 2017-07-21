import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LatLongService } from '../lat-long.service';
import { PhysicalAddressService } from '../physical-address.service';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.css'],
  providers: [ LatLongService, PhysicalAddressService ]
})
export class TreasureComponent implements OnInit {
  physAddyOutput: any[]=null;
  latLongOutput: any[]=null;
  physAddyInput: boolean=false;
  latLongInput: boolean=false;
  noResult: boolean=false;
  improperData: boolean=false;

  constructor(private router: Router, private latLong: LatLongService, private physAddy: PhysicalAddressService) { }

  ngOnInit() {
  }

  showLatLongForm() {
    this.latLongInput = true;
  }

  showPhysAddyForm(){
    this.physAddyInput = true;
  }

  testLatLongValues(lat: string, long: string){
    if(((parseFloat(lat) >= -90) && (parseFloat(lat) <= 90)) && ((parseFloat(long) >= -180) && (parseFloat(long) <= 180))){
      this.getLocationByLatLong(lat, long);
    }else{
      this.noResult = false;
      this.improperData = true;
    }
  }

  getLocationByLatLong(lat: string, long: string){
    this.latLong.getLocationsPhysicalAddress(lat, long).subscribe(response =>{
      if(response.json().status === "ZERO_RESULTS"){
        this.noResult = true;
        this.physAddyOutput = null;
      }else{
        this.improperData = false;
        this.noResult = false;
        this.physAddyOutput = response.json();
        this.latLongOutput = null;
      }
    });
    this.latLongInput = false;
    this.physAddyInput = false;
  }

  getLatLongByPhysAddy(streetAddyNum: number, streetName: string, roadType: string, city: string, state: string){
    this.physAddy.getLocationsLatLong(streetAddyNum, streetName, roadType, city, state).subscribe(response => {
      if(response.json().status === "ZERO_RESULTS"){
        this.noResult = true;
        this.latLongOutput = null;
      }else{
        this.improperData = false;
        this.noResult = false;
        this.latLongOutput = response.json();
        this.physAddyOutput = null;
      }
    });
    this.physAddyInput = false;
    this.latLongInput = false;
  }

}
