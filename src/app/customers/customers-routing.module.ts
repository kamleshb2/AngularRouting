import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { MapsViewComponent } from './maps-view/maps-view.component';

const routes: Routes = [{ path: '', component: CustomersComponent }, 
{path: 'maps', component: MapsViewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
