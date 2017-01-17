import { Component, ViewChild, ViewContainerRef, ElementRef, OnInit} from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from'angular2-google-maps/core';
import { addresShared } from '../service/addresShared.service';


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
  destenyInput = 'Hbf/ZOB';

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

   // tslint:disable-next-line:member-ordering
   parkhauseAddreses = [
    {name: 'Waffenplatz', lat: '????',lng:'????'},
    {name: 'City', lat: '22',lng:'22'},
    {name: 'Galeria Kaufhof', lat: '22',lng:'22'},
    {name: 'Pferdemarkt', lat: '22',lng:'22'},
    {name: 'CCO Parkdeck 1', lat: '53.1443608',lng:'8.2157246'},
    {name: 'CCO Parkdeck 2', lat: '22',lng:'22'},
    {name: 'Hbf/ZOB', lat: '53.1432439',lng:'8.2214212'},
    {name: 'Theaterwall', lat: '22',lng:'22'},
    {name: 'Theatergarage', lat: '22',lng:'22'},
    {name: 'Heiligengeist-Hoefe', lat: '22',lng:'22'},
    {name: 'Schlosshoefe', lat: '22',lng:'22'},
  ];

}