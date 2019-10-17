import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AuthGuard } from './auth.guard';
import { CustomersModule } from './customers/customers.module';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [{ path: 'customer-list', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

{path:'login', component: LoginComponent},
{path:'about', component: AboutPageComponent, canActivate:[AuthGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
