import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DesingSystemShowroomComponent } from './desing-system-showroom/desing-system-showroom.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DesingSystemShowroomComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
