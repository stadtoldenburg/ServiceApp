import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home';

import { ParkingComponent } from './parking';
import { ParkingMapComponent,SettingsDialog } from './parking/parkingMap';
import { ParkingTableComponent } from './parking/parkingTable';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'parkingmap', component: ParkingMapComponent},
    {path: 'parkingtable', component: ParkingTableComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class ServiceAppRoutingModule { }
