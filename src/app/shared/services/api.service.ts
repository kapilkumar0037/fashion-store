import { inject, Injectable } from '@angular/core';
import { Api } from './api';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '@shared/constants/api.constants';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { IFashionProduct, IProduct } from '@shared/models/general.models';
import { ICart, ICartItem } from '@shared/models/cart.models';

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
  getProductsByCategory<T = any>(): Api<T> {
    return this.getApi(ApiConstants.PRODUCTS_ENDPOINT_CATEGORY);
  }

  getProductCategories<T = any>(): Api<T> {
    return this.getApi(ApiConstants.PRODUCTS_ENDPOINT_CATEGORY_LIST);
  }
  getProductsBySearchTerm<T = any>(): Api<T> {
    return this.getApi<T>(ApiConstants.PRODUCTS_ENDPOINT);
  }

  // Cart APIs
  getCartItems<T = ICart>(): Observable<T> {
    return this.httpClient.get<T>(`${this.apiBaseUrl}${ApiConstants.CART_ITEMS_ENDPOINT}`);
  }

  addToCart<T = ICart>(productId: number, product: IProduct, quantity: number): Observable<T> {
    return this.getCartItems<ICart>().pipe(
      mergeMap((cartData: ICart) => {
        const existingItemIndex = cartData.items.findIndex(item => item.productId === productId);
        
        if (existingItemIndex > -1) {
          // Update quantity if product exists
          cartData.items[existingItemIndex].quantity += quantity;
        } else {
          // Add new item if product doesn't exist
          cartData.items.push({
            productId,
            product,
            quantity
          });
        }

        // Update cart totals
        cartData.totalItems = cartData.items.reduce((total, item) => total + item.quantity, 0);
        cartData.totalPrice = cartData.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        
        return this.httpClient.put<T>(`${this.apiBaseUrl}${ApiConstants.CART_ITEMS_ENDPOINT}`, cartData);
      })
    );
  }

  removeFromCart<T = ICart>(productId: number): Observable<T> {
    return this.getCartItems<ICart>().pipe(
      mergeMap((cartData: ICart) => {
        cartData.items = cartData.items.filter(item => item.productId !== productId);
        
        // Update cart totals
        cartData.totalItems = cartData.items.reduce((total, item) => total + item.quantity, 0);
        cartData.totalPrice = cartData.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

        return this.httpClient.put<T>(`${this.apiBaseUrl}${ApiConstants.CART_ITEMS_ENDPOINT}`, cartData);
      })
    );
  }

  updateCartQuantity<T = ICart>(productId: number, quantity: number): Observable<T> {
    return this.getCartItems<ICart>().pipe(
      mergeMap((cartData: ICart) => {
        const itemIndex = cartData.items.findIndex(item => item.productId === productId);
        
        if (itemIndex > -1) {
          cartData.items[itemIndex].quantity = quantity;
          cartData.totalItems = cartData.items.reduce((total, item) => total + item.quantity, 0);
          cartData.totalPrice = cartData.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        }
        
        return this.httpClient.put<T>(`${this.apiBaseUrl}${ApiConstants.CART_ITEMS_ENDPOINT}`, cartData);
      })
    );
  }

  clearCart<T = ICart>(): Observable<T> {
    const emptyCart: ICart = {
      items: [],
      totalItems: 0,
      totalPrice: 0,
      discount: 0,
      subTotal: 0,
      totalTax: 0,
      totalShipping: 0
    };
    return this.httpClient.put<T>(`${this.apiBaseUrl}${ApiConstants.CART_ITEMS_ENDPOINT}`, emptyCart);
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
