import { Component, OnInit, Input } from '@angular/core';
import { addresShared } from '../../service/addresShared.service';
import { ADDRESES } from '../../service/data/parkHauseAddreses';

@Component({
  selector: 'side-map',
  templateUrl: './side-map.component.html',
  styleUrls: ['./side-map.component.css']
})
export class SideMapComponent implements OnInit {
 public parkhauseAddreses = ADDRESES;
 public title: string = 'oldenburg';
 public oldenburgLat: number = 53.1432439 ;
 public oldenburgLng: number = 8.2214212 ;
 public zoom: number = 13;
 public destLat: number ;
 public destLng: number ;
 public oriLat: number;
 public oriLng: number;

  constructor(private addresService:addresShared) { }
  
  ngOnInit() {
    this.currentlocationFind();
    
  }

  serchAddres(destenyInput){
     for(var i =0;i<this.parkhauseAddreses.length;i++){
       let parkHaus = this.parkhauseAddreses[i];
       if(parkHaus.name===destenyInput){
         this.destLat = Number(parkHaus.lat);
         this.destLng = Number(parkHaus.lng);
       }
     }
   }


   currentlocationFind(){
    if (!navigator.geolocation){
        console.log("<p>Geolocation is not supported by your browser</p>");
      }
     if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((location) => {
               this.setLatLng(location.coords.latitude, location.coords.longitude);
            });
        }
   }
   setLatLng(lat:number, lng:number) {
        this.oriLat = lat;
        this.oriLng = lng;
    }

}
