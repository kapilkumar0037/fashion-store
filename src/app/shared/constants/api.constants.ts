import { environment } from "src/environments/environment.development";

export class ApiConstants {
  static readonly BASE_URL = environment.apiBaseUrl;
  static readonly PRODUCTS_ENDPOINT = '/products/search';
  static readonly PRODUCTS_ENDPOINT_CATEGORY = '/products/category/:category';
  static readonly TESTIMONIALS = '/testimonials';
  static readonly CATEGORIES_ENDPOINT = '/categories';
  static readonly ORDERS_ENDPOINT = '/orders';
  static readonly WISHLIST_ENDPOINT = '/wishlist';
  static readonly AUTH_ENDPOINT = '/auth';
  static readonly FEATURED_AUDIENCE = '/featuredAudience';
  static readonly CART_ENDPOINT = '/cart';
  static readonly CART_ITEMS_ENDPOINT = '/cartItems';
  static readonly CART_CHECKOUT_ENDPOINT = '/cart/checkout';
  static readonly CART_DISCOUNT_ENDPOINT = '/cart/discount';

}