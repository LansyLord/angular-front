import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BriefingsRoutingModule } from './briefings-routing.module';
import { BriefingsComponent } from './briefings/briefings.component';


@NgModule({
  declarations: [
    BriefingsComponent
  ],
  imports: [
    CommonModule,
    BriefingsRoutingModule
  ]
})
export class BriefingsModule { }
