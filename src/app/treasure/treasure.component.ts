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
  latLongInput: boolean=false;
  physAddyInput: boolean=false;
  noResultPhysOutput: boolean=false;
  noResultLatLongOutput: boolean=false;
  improperData: boolean=false;
  audio = <HTMLAudioElement>document.getElementById("audio");

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
      this.improperData = true;
      // this.audio.play();
      console.log(this.audio);
    }

  }

  getLocationByLatLong(lat: string, long: string){
    this.latLong.getLocationLatLong(lat, long).subscribe(response =>{
      if(response.json().status === "ZERO_RESULTS"){
        this.noResultPhysOutput = true;
      }else{
        this.noResultPhysOutput = false;
        this.physAddyOutput = response.json();
      }
    });
    this.latLongInput = false;
  }

  getLatLongByPhysAddy(streetAddyNum: number, streetName: string, roadType: string, city: string, state: string){
    this.physAddy.getLocationPhysAddy(streetAddyNum, streetName, roadType, city, state).subscribe(response => {
      if(response.json().status === "ZERO_RESULTS"){
        this.noResultLatLongOutput = true;
      }else{
        this.noResultLatLongOutput = false;
        this.latLongOutput = response.json();
      }
    });
    this.physAddyInput = false;
  }

}
