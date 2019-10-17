import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewCustomerPageComponent } from './new-customer-page/new-customer-page.component';
import { OrderListPageComponent } from './order-list-page/order-list-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import{ AuthService } from '../app/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutPageComponent,
    NewCustomerPageComponent,
    OrderListPageComponent,
    LogoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
