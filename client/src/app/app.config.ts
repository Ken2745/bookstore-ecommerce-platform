// import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideRouter(routes)
//   ]
// };

import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),              // AppRoutingModule
    provideHttpClient(withInterceptorsFromDi()), // HttpClientModule
    
    importProvidersFrom(
      NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
      ToastrModule.forRoot()
    ),

    { provide: 'HTTP_INTERCEPTORS', useClass: ErrorInterceptor, multi: true },
    { provide: 'HTTP_INTERCEPTORS', useClass: LoadingInterceptor, multi: true },
  ]
};