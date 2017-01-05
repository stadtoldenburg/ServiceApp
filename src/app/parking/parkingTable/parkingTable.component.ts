import { Component, OnInit , ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { CompaniesService } from '../service/parking.service';

@Component({
  selector: 'app-parkingTable',
  templateUrl: './parkingTable.component.html',
  styleUrls: ['./parkingTable.component.css']
})
export class ParkingTableComponent implements OnInit {
@ViewChild('sidenav') sidenav: MdSidenav;
 parkings:any;
 
  constructor(private service:CompaniesService) {
  }

  ngOnInit() {
  }
showParking() {
    this.sidenav.open();
  }

  callService() {
    this.service.getCompanies().subscribe(
      (parkings) => {
        this.parkings = parkings.list.Company;
        console.log(this.parkings);
      });
  }
}