import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummary } from '../shared/components/order-summary/order-summary';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [CommonModule, OrderSummary, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})

export class CheckoutComponent {
  currentStep: 'address' | 'shipment' | 'review' = 'address';
  setCurrentStep(step: 'address' | 'shipment' | 'review'){
    this.currentStep = step;
  }
}

