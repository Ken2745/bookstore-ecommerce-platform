import { Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const STORE_ROUTES: Routes = [
  { path: '', component: StoreComponent },
  { path: ':id', component: ProductDetailsComponent, data: { breadcrumb: { alias: 'productName' } } }
];

