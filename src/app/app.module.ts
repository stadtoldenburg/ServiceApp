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
import { ParkingMapComponent } from './parking/parkingMap';
import { ParkingTableComponent } from './parking/parkingTable';

import { ParkingsService } from './parking/service/parking.service';
import { addresShared } from './parking/service/addresShared.service';

import { ParkTablePipe } from './parking/parkingTable/pipe';
import { CarouselComponent } from './components/carousel';

import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AgmCoreModule} from 'angular2-google-maps/core';
import { DirectionsMapDirective } from './parking/parkingMap/DirectionsMap.Directive';
@NgModule({
 declarations: [
    AppComponent,
    HomeComponent,
    ParkingComponent,
    ParkingMapComponent,
    ParkingTableComponent,
    CarouselComponent,
    DirectionsMapDirective
    ],
 entryComponents: [
    ParkingComponent
    ],
 imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ServiceAppRoutingModule,
    ParkTablePipe,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDI4N7QdySwfP8aO0oWipZPbGKJHGAUI_M'
    })
  ],
  providers: [ParkingsService,addresShared],
  bootstrap: [AppComponent]
})
export class AppModule { }
