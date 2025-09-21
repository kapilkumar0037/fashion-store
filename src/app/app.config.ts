import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appReducer } from '@shared/store/app.reducer';
import { productReducer } from '@shared/store/product/product.reducer';
import { ProductEffects } from '@shared/store/product/product.effects';
import { CartEffects } from '@shared/store/cart/cart.effects';
import { cartReducer } from '@shared/store/cart/cart.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppEffects } from '@shared/store/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimations(),
    provideStore({ 
      app: appReducer,
      product: productReducer,
      cart: cartReducer
    }),
    provideEffects([ProductEffects, CartEffects, AppEffects]),
  ]
};
