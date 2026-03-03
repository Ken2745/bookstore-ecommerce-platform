import { Component } from '@angular/core';
import { BasketService } from '../../../basket/basket.service';

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss',
})
export class OrderSummary {
  constructor(public basketService: BasketService){}
}