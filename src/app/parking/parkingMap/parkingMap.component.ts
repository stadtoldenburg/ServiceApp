import { Component, ViewChild, ViewContainerRef, ElementRef, OnInit} from '@angular/core';

import { addresShared } from '../service/addresShared.service';
import { ADDRESES } from '../service/data/parkHauseAddreses';

@Component({
  selector: 'app-parkingMap',
  templateUrl: './parkingMap.component.html',
  styleUrls: ['./parkingMap.component.css']
})
export class ParkingMapComponent  implements OnInit {

  title: string = 'oldenburg';
  oldenburgLat: number = 53.1432439 ;
  oldenburgLng: number = 8.2214212 ;
  zoom: number = 14;
  destenyInput = '';
  parkhauseAddreses = ADDRESES;
  destination = { lat: 0.145186, lng: 0.223971 };
  constructor(private addresService:addresShared) {}
   ngOnInit() {
     this.destenyInput = this.addresService.parkhausname;
     this.serchAddres();
   }
   

   serchAddres(){
     for(var i =0;i<this.parkhauseAddreses.length;i++){
       let parkHaus = this.parkhauseAddreses[i];
       if(parkHaus.name===this.destenyInput){
         this.destination.lat = Number(parkHaus.lat);
         this.destination.lng = Number(parkHaus.lng);
       }
     }
   }
}