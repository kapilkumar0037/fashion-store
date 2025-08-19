import { inject, Injectable } from '@angular/core';
import { Api } from './api';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '@shared/constants/api.constants';
import { Observable } from 'rxjs';
import { IFashionProduct } from '@shared/models/general.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBaseUrl: string = environment.apiBaseUrl;
  httpClient = inject(HttpClient);
  constructor() { }

  getFeaturedAudience<T = any>(): Api<T> {
    return this.getApi(ApiConstants.FEATURED_AUDIENCE);
  }
  getFeaturedTestimonials<T = any>(): Api<T> {
    return this.getApi(ApiConstants.TESTIMONIALS);
  }
  getFeaturedProducts<T = any>(): Api<T> {
    return this.getApi(ApiConstants.PRODUCTS_ENDPOINT);
  }

  // Cart APIs
  getCartItems<T = any>(): Api<T> {
    return this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);

  }

  addToCart<T = any>(): Api<T> {
    return this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);
    
  }

  removeFromCart<T = any>(): Api<T> {
    return this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);
  }

  updateCartQuantity<T = any>(): Api<T> {
    return this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);
  }

  clearCart<T = any>(): Api<T> {
    return this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);
  }

  applyDiscount<T = any>(): Api<T> {
    return this.getApi<T>(ApiConstants.CART_DISCOUNT_ENDPOINT);
  }
  checkout<T = any>(): Api<T> {
    return this.getApi<T>(ApiConstants.CART_CHECKOUT_ENDPOINT);

  }

  private getApi<T>(endpoint: string): Api<T> {
    return new Api<T>(this.httpClient, this.apiBaseUrl + endpoint);
  }
}
