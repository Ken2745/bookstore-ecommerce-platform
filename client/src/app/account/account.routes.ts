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
  }
];

// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: 'login',
//     loadComponent: () =>
//       import('./account/login/login.component')
//         .then(m => m.LoginComponent)
//   },
//   {
//     path: 'register',
//     loadComponent: () =>
//       import('./account/register/register')
//         .then(m => m.Register)
//   }
// ];