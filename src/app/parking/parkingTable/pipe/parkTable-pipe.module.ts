import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {statusFilter, OpenCloseFilter, FreiPlatyeFilter} from "./table.pipe";

@NgModule({
  declarations:[statusFilter,OpenCloseFilter,FreiPlatyeFilter],
  imports:[CommonModule],
  exports:[statusFilter,OpenCloseFilter,FreiPlatyeFilter]
})

export class ParkTablePipe{}