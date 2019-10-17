import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms'

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SearchComponent } from './search/search.component';
import { EditCustomerDetailsComponent } from './edit-customer-details/edit-customer-details.component';
import { MapsViewComponent } from './maps-view/maps-view.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { CustomerOrderViewComponent } from './customer-order-view/customer-order-view.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';


@NgModule({
  declarations: [CustomersComponent, ListViewComponent, GridViewComponent, SearchComponent, EditCustomerDetailsComponent, MapsViewComponent, DeleteCustomerComponent, CustomerOrderViewComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAGnRhgF47LpQdkqq4RDxkroCCRMG2VxpA'}) //AIzaSyArgczgNb1-ePaPnaHr5NhSItBe_c4yOSg
  ],
  providers: [GoogleMapsAPIWrapper]
})
export class CustomersModule { }
