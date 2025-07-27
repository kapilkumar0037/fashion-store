import { environment } from "src/environments/environment.development";

export class ApiConstants {
  static readonly BASE_URL = environment.apiBaseUrl;
  static readonly PRODUCTS_ENDPOINT = '/products';
  static readonly TESTIMONIALS = '/testimonials';
  static readonly CATEGORIES_ENDPOINT = '/categories';
  static readonly ORDERS_ENDPOINT = '/orders';
  static readonly WISHLIST_ENDPOINT = '/wishlist';
  static readonly AUTH_ENDPOINT = '/auth';
  static readonly FEATURED_AUDIENCE = '/featuredAudience';

}