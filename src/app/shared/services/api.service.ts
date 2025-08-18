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
  getCartItems<T = any>(): Observable<T> {
    const api = this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);
    return api.getAll();
  }

  addToCart<T = any>(productId: string, product:IFashionProduct, quantity: number = 1): Observable<T> {
    const api = this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);
    return api.create({ productId, product, quantity } as any);
  }

  removeFromCart<T = any>(productId: string): Observable<T> {
    const api = this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);
    return api.delete(productId);
  }

  updateCartQuantity<T = any>(productId: string, quantity: number): Observable<T> {
    const api = this.getApi<T>(ApiConstants.CART_ITEMS_ENDPOINT);
    return api.update(productId, { quantity } as any);
  }

  clearCart<T = any>(): Observable<T> {
    return this.httpClient.delete<T>(this.apiBaseUrl + ApiConstants.CART_ENDPOINT);
  }

  applyDiscount<T = any>(discountCode: string): Observable<T> {
    const api = this.getApi<T>(ApiConstants.CART_DISCOUNT_ENDPOINT);
    return api.create({ code: discountCode } as any);
  }

  checkout<T = any>(paymentDetails: any): Observable<T> {
    const api = this.getApi<T>(ApiConstants.CART_CHECKOUT_ENDPOINT);
    return api.create(paymentDetails);
  }

  private getApi<T>(endpoint: string): Api<T> {
    return new Api<T>(this.httpClient, this.apiBaseUrl + endpoint);
  }
}
