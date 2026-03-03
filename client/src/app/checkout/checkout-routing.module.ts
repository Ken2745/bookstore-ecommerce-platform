import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from '../core/guards/auth.guard';
import { AddressComponent } from './address/address.component';
import { CheckoutComponent } from './checkout.component';
import { Review } from './review/review';
import { Shipment } from './shipment/shipment';

const routes: Routes = [
  {
    path:'',
    component: CheckoutComponent,
    canActivate: [canActivate],
    children: [
      {path: 'address', component: AddressComponent, data:{breadcrumb: 'Address'}},
      {path: 'shipment', component: Shipment, data:{breadcrumb: 'Shipment'}},
      {path: 'review', component: Review, data:{breadcrumb: 'Review'}},
      {path: '', redirectTo: 'address', pathMatch: 'full'} //deafulting to address step
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }