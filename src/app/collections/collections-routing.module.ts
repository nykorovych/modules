import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ColectionHomeComponent} from './colection-home/colection-home.component';


const routes: Routes = [
  {path: '', component: ColectionHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
