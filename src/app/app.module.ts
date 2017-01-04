import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { ServiceAppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkingMapComponent,SettingsDialog } from './parking/parkingMap';
import { ParkingTableComponent } from './parking/parkingTable';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParkingComponent,
    SettingsDialog,
    ParkingMapComponent
,
    ParkingTableComponent
],
   entryComponents: [
    ParkingComponent,
    SettingsDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ServiceAppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
