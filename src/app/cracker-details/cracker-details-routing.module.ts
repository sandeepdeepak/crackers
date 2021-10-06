import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCrackersComponent } from './view-crackers/view-crackers.component';

const routes: Routes = [
  {
    path: '**',
    component: ViewCrackersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrackerDetailsRoutingModule { }
