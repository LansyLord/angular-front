import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'briefings', pathMatch: 'full', redirectTo: 'briefings'},
  {
    path: 'briefings',
    loadChildren: () => import('./briefings/briefings.module').then(m => m.BriefingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
