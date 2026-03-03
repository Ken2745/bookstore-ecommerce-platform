import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddressComponent } from './address/address.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { Review } from './review/review';
import { Shipment } from './shipment/shipment';



@NgModule({
  declarations: [
    CheckoutComponent,
    AddressComponent,
    Shipment,
    Review
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }