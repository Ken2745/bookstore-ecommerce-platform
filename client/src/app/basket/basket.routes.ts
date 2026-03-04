import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basket',
    loadComponent: () =>
      import('./basket.component')
        .then(m => m.BasketComponent)
  }
];