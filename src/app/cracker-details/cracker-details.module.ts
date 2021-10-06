import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrackerDetailsRoutingModule } from './cracker-details-routing.module';
import { ViewCrackersComponent } from './view-crackers/view-crackers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewCrackersComponent
  ],
  imports: [
    CommonModule,
    CrackerDetailsRoutingModule,
    FormsModule
  ]
})
export class CrackerDetailsModule { }
