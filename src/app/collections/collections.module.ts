import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { ColectionHomeComponent } from './colection-home/colection-home.component';


@NgModule({
  declarations: [ColectionHomeComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports: []
})
export class CollectionsModule { }
