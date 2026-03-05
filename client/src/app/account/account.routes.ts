import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component')
        .then(m => m.LoginComponent),
    data: { breadcrumb: 'Login' }
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register')
        .then(m => m.Register),
    data: { breadcrumb: 'Register' }
  },

  {
  path: 'profile',
  loadComponent: () =>
    import('./profile/profile')
      .then(m => m.Profile)
}
];
