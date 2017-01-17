import { Component, OnInit , ViewChild, ViewContainerRef  } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { ParkingsService } from '../service/parking.service';
import { addresShared } from '../service/addresShared.service';
import {Observable} from 'rxjs/Rx';
import { CarouselComponent } from '../../components/carousel';
declare var $:any;

@Component({
  selector: 'app-parkingTable',
  templateUrl: './parkingTable.component.html',
  styleUrls: ['./parkingTable.component.css']
})
export class ParkingTableComponent implements OnInit {

@ViewChild('sidenav') sidenav: MdSidenav;
@ViewChild(CarouselComponent) appCarousel;
 public providerPicFileName: String = "slids";
 Parkhaus:any;
 lastTime:any;
 currentPark={};
 private subscription;
 
 constructor(private service:ParkingsService,private addresService:addresShared) {}

  ngOnInit() {
    this.callService() ;
    this.subscription = Observable.interval(2000 * 60).subscribe(x => {
    this.callService();
  });
    
  }
showPark(park) {
    this.currentPark=park; 
    // this.appCarousel.carouselFromParkingtable();
    this.addresService.setAddres(park.Name);
    this.sidenav.open();
  }
closeSidenave(){
  this.sidenav.close();
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

