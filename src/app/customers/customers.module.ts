import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SearchComponent } from './search/search.component';
import { EditCustomerDetailsComponent } from './edit-customer-details/edit-customer-details.component';
import { MapsViewComponent } from './maps-view/maps-view.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { CustomerOrderViewComponent } from './customer-order-view/customer-order-view.component';


@NgModule({
  declarations: [CustomersComponent, ListViewComponent, GridViewComponent, SearchComponent, EditCustomerDetailsComponent, MapsViewComponent, DeleteCustomerComponent, CustomerOrderViewComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
