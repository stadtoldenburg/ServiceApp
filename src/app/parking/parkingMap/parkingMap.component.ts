import { Component, ViewChild, ViewContainerRef, ElementRef, OnInit} from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { addresShared } from '../service/addresShared.service';
import { autoPosition } from '../service/autoPosition';
import { ADDRESES } from '../service/data/parkHauseAddreses';

@Component({
  selector: 'app-parkingMap',
  templateUrl: './parkingMap.component.html',
  styleUrls: ['./parkingMap.component.css']
})
export class ParkingMapComponent  implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  showside :boolean =false;
  title: string = 'oldenburg';
  oldenburgLat: number = 53.1432439 ;
  oldenburgLng: number = 8.2214212 ;
  zoom: number = 14;
  destenyInput = '';
  parkhauseAddreses = ADDRESES;
  destination = { lat: 0.0, lng: 0.0 };
  autoPosition:any;
  btnSideNave: string='chevron_right';
  constructor(private addresService:addresShared) {}
   ngOnInit() {
     this.destenyInput = this.addresService.parkhausname;
     this.serchAddres();
   }

   carePositsion(){
    if (!navigator.geolocation){
        console.log("<p>Geolocation is not supported by your browser</p>");
      }
     if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((location) => {
              this.autoPosition = {lat:location.coords.latitude,lng:location.coords.longitude};
              this.addresService.setAutoPosition(this.autoPosition)
            });
        }
   }
   resetPos(){
     this.addresService.resetCarePositsion();
   }

   serchAddres(){
     for(let i =0;i<this.parkhauseAddreses.length;i++){
       let parkHaus = this.parkhauseAddreses[i];
       if(parkHaus.name===this.destenyInput){
         this.destination.lat = Number(parkHaus.lat);
         this.destination.lng = Number(parkHaus.lng);
       }
     }
   }
  closeOpenSidenave(){
    if(this.sidenav._opened==true){
      this.sidenav.close();
      this.btnSideNave = 'chevron_right';
   }
   if(this.sidenav._isClosed==true){
     this.sidenav.open();
     this.btnSideNave = 'chevron_left';
   }
  }

}