import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './compenents/face-snap/face-snap.component';
import { FaceSnapListComponent } from './compenents/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './compenents/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './compenents/single-face-snap/single-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ],
  exports:[
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
  ]
})
export class FaceSnapsModule { }
