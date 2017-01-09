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

import { ParkingsService } from './parking/service/parking.service';

import { ParkTablePipe } from './parking/parkingTable/pipe';
import { CarouselComponent } from './components/carousel';

import { CarouselModule } from 'ng2-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParkingComponent,
    SettingsDialog,
    ParkingMapComponent
,
    ParkingTableComponent,
    CarouselComponent
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
    ServiceAppRoutingModule,
    ParkTablePipe,
    CarouselModule.forRoot()
  ],
  providers: [ParkingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
