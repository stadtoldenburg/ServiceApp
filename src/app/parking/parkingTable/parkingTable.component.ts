import { Component, OnInit , ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { ParkingsService } from '../service/parking.service';
import {Observable} from 'rxjs/Rx';

declare var $:any;

@Component({
  selector: 'app-parkingTable',
  templateUrl: './parkingTable.component.html',
  styleUrls: ['./parkingTable.component.css']
})
export class ParkingTableComponent implements OnInit {

@ViewChild('sidenav') sidenav: MdSidenav;

 Parkhaus:any;
 lastTime:any;
 currentPark={};
 private subscription;
  constructor(private service:ParkingsService) {
  }

  ngOnInit() {
    this.callService() ;
    this.subscription = Observable.interval(2000 * 60).subscribe(x => {
    this.callService();
  });
    
  }
showPark(park) {
    this.currentPark=park;
    this.sidenav.open();
  }

  callService() {
    this.service.getParks().subscribe(
      (parkings) => {
        this.Parkhaus = parkings.Daten.Parkhaus;
        this.lastTime = parkings.Daten.Zeitstempel;  
      });
  }
   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

