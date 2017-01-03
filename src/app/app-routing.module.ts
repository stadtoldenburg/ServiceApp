import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingComponent } from './parking';
// import { FahrradComponent } from './fahrrad/fahrrad.component';
import { HomeComponent } from './home';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'parking', component: ParkingComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class ServiceAppRoutingModule { }
