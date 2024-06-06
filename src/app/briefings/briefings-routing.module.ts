import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BriefingsComponent } from './briefings/briefings.component';

const routes: Routes = [
  {path: '', component: BriefingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BriefingsRoutingModule { }
