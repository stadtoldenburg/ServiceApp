import { Component } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location: Location;
  constructor(location: Location) { this.location = location; }
}
