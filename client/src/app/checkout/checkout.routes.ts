import { Routes } from '@angular/router';
import { canActivate } from '../core/guards/auth.guard';

export const CHECKOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./checkout.component').then(m => m.CheckoutComponent),
    canActivate: [canActivate],
    children: [
      {
        path: 'address',
        loadComponent: () =>
          import('./address/address.component').then(m => m.AddressComponent),
        data: { breadcrumb: 'Address' }
      },
      {
        path: 'shipment',
        loadComponent: () =>
          import('./shipment/shipment').then(m => m.Shipment),
        data: { breadcrumb: 'Shipment' }
      },
      {
        path: 'review',
        loadComponent: () =>
          import('./review/review').then(m => m.Review),
        data: { breadcrumb: 'Review' }
      },
      { path: '', redirectTo: 'address', pathMatch: 'full' }
    ]
  }
];