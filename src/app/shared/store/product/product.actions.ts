import { createAction, props } from "@ngrx/store";
import { IFashionProduct, IProduct } from "@shared/models/general.models";

export const loadProducts = createAction(
  '[Product] Load Products',
  props<{ searchTerm: string }>()

);
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: IProduct[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>()
);
export const getFeaturedProducts = createAction(
  '[Product] Get Featured Product',
  props<{ audience: string }>()
);
export const getFeaturedProductsSuccess = createAction(
  '[Product] Get Featured Product Success',
  props<{ products: IProduct[] }>()
);
export const getFeaturedProductsFailure = createAction(
  '[Product] Get Featured Product Failure',
  props<{ error: string }>()
);
export const getTrendingProducts = createAction(
  '[Product] Get Trending Products'
);
export const getTrendingProductsSuccess = createAction(
  '[Product] Get Trending Products Success',
  props<{ products: IProduct[] }>()
);
export const getTrendingProductsFailure = createAction(
  '[Product] Get Trending Products Failure',
  props<{ error: string }>()
);

export const getProductCategories = createAction(
  '[Product] Get Product categories'
);
export const getProductCategoriesSuccess = createAction(
  '[Product] Get Product categories Success',
  props<{ categories: string[] }>()
);
export const getProductCategoriesFailure = createAction(
  '[Product] Get Product categories Failure',
  props<{ error: string }>()
);
export const getProductByCategories = createAction(
  '[Product] Get Product by categories',
  props<{ category: string }>()
);
export const getProductByCategoriesSuccess = createAction(
  '[Product] Get Product by categories Success',
  props<{ products: IProduct[] }>()
);
export const getProductByCategoriesFailure = createAction(
  '[Product] Get Product by categories Failure',
  props<{ error: string }>()
);
