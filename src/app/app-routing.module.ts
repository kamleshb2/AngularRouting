import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [{ path: 'customer-list', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

{path:'login', component: LoginComponent},
{path:'about', component: AboutPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
