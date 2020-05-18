import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ColectionHomeComponent} from './colection-home/colection-home.component';
import { BiograohyComponent } from './biograohy/biograohy.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
  {
    path: '',
    component: ColectionHomeComponent,
    children: [
      {path: '', component: BiograohyComponent},
      {path: 'companies', component: CompaniesComponent},
      {path: 'partners', component: PartnersComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
