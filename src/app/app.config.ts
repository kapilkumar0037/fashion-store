import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appReducer } from '@shared/store/app.reducer';
import { productReducer } from '@shared/store/product/product.reducer';
import { ProductEffects } from '@shared/store/product/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ 
      app: appReducer,
      product: productReducer 
    }),
    provideEffects([ProductEffects])
  ]
};
