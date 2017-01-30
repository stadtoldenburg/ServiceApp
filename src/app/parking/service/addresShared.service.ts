import {Injectable}      from '@angular/core';
import {autoPosition} from './autoPosition';
@Injectable()
export class addresShared {
  parkhausname:string;

  autoPosition: autoPosition={
   autoPoLat : localStorage.getItem('autoPoLat') ? JSON.parse(localStorage.getItem('autoPoLat')) : 0,
   autoPoLng : localStorage.getItem('autoPoLng') ? JSON.parse(localStorage.getItem('autoPoLng')) : 0
  };

  setAddres(parkhausname) {
    this.parkhausname = parkhausname;
    console.log(parkhausname);
  }

   setAutoPosition(autoPos){
    this.autoPosition.autoPoLat = autoPos.lat;
    this.autoPosition.autoPoLng = autoPos.lng;
    localStorage.setItem('autoPoLat', autoPos.lat);
    localStorage.setItem('autoPoLng', autoPos.lng);
  }
  resetCarePositsion(){
    this.autoPosition.autoPoLat = 0;
    this.autoPosition.autoPoLng = 0;
    localStorage.setItem('autoPoLat', '0');
    localStorage.setItem('autoPoLng', '0');
  }
}