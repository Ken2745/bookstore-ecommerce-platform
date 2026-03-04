import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shipment } from './shipment/shipment';
import { AddressComponent } from './address/address.component';
import { Review } from './review/review';
import { OrderSummary } from '../shared/components/order-summary/order-summary';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, AddressComponent, Shipment, Review, OrderSummary],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})

export class CheckoutComponent {
  currentStep: 'address' | 'shipment' | 'review' = 'address';
  setCurrentStep(step: 'address' | 'shipment' | 'review'){
    this.currentStep = step;
  }
}

