import { createReducer, on } from '@ngrx/store';
import { initialProductState } from './product.state';
import * as ProductActions from './product.actions';

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products: products
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
  on(ProductActions.getFeaturedProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.getFeaturedProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    featuredProducts: products
  })),
  on(ProductActions.getFeaturedProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
  on(ProductActions.getTrendingProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.getTrendingProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    trendingProducts: products
  })),
  on(ProductActions.getTrendingProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  }))
);
