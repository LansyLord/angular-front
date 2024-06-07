import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


import { BriefingsRoutingModule } from './briefings-routing.module';
import { BriefingsComponent } from './briefings/briefings.component';
  

@NgModule({
  declarations: [
     BriefingsComponent,
  ],
  imports: [
    CommonModule,
    BriefingsRoutingModule,

    MatTableModule,



  ]
})
export class BriefingsModule { }
