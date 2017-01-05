import { Component, OnInit , ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { ParkingsService } from '../service/parking.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-parkingTable',
  templateUrl: './parkingTable.component.html',
  styleUrls: ['./parkingTable.component.css']
})
export class ParkingTableComponent implements OnInit {

@ViewChild('sidenav') sidenav: MdSidenav;

 parkings:any;
 lastTime:any;
 private subscription;
  constructor(private service:ParkingsService) {
  }

  ngOnInit() {
    this.subscription = Observable.interval(2000 * 60 ).subscribe(x => {
    this.callService();
  });
    
  }
showParking() {
    this.sidenav.open();
  }

  callService() {
    this.service.getParks().subscribe(
      (parkings) => {
        this.parkings = parkings.Daten.Parkhaus;
        this.lastTime = parkings.Daten.Zeitstempel;
        console.log(this.lastTime);
      });
  }
   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}