import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from
'angular2-google-maps/core';


@Component({
  selector: 'settings-dialog',
  template: `
    <label>Would you like dog pics every min???</label>
    <md-slide-toggle></md-slide-toggle>
  `
})
export class SettingsDialog {

}

@Component({
  selector: 'app-parkingMap',
  templateUrl: './parkingMap.component.html',
  styleUrls: ['./parkingMap.component.css']
})
export class ParkingMapComponent {
  title: string = 'My first angular2-google-maps project'
  lat: number = 51.678418
  lng: number = 4.333
  zoom: number = 12
  origin = { lat:53.1379184, lng:8.2064857};  // its a example aleatory position
  destination = { lat: 53.047912, lng: 8.7187927 };  // its a example aleatory position

  dogs = [
    {rows: 2, name: "Mal", human: "Jeremy", age: 5},
    {rows: 1, name: "Molly", human: "David", age: 5},
    { rows: 1, name: "Sophie", human: "Alex", age: 8},
    {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
    { rows: 1, name: "Kobe", human: "Igor", age: 5},
    {rows: 2, name: "Porter", human: "Kara", age: 3},
    { rows: 1, name: "Stephen", human: "Stephen", age: 8},
    {rows: 1, name: "Cinny", human: "Jules", age: 3},
    { rows: 1, name: "Hermes", human: "Kara", age: 3},
  ];
  @ViewChild('sidenav') sidenav: MdSidenav;
  currentDog = {};
  isDarkTheme = false;

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {}

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }

  showDog(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }
}