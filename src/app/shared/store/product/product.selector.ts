import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

// Feature selector
export const selectProductState = createFeatureSelector<ProductState>('product');

// Select all products
export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

// Select all product categories
export const selectAllProductcategories = createSelector(
  selectProductState,
  (state: ProductState) => state.categories
);
// Select featured products
export const selectFeaturedProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.featuredProducts
);

// Select trending products
export const selectTrendingProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.trendingProducts
);

// Select loading state
export const selectProductLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading
);

// Select error state
export const selectProductError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
);

// Select a product by ID
export const selectProductById = (productId: number) =>
  createSelector(
    selectAllProducts,
    (products) => products.find(product => product.id === productId)
  );

// Select products by category
export const selectProductsByCategory = (category: string) =>
  createSelector(
    selectAllProducts,
    (products) => products.filter(product => product.category === category)
  );

// Select products by brand
export const selectProductsByBrand = (brand: string) =>
  createSelector(
    selectAllProducts,
    (products) => products.filter(product => product.brand === brand)
  );

import { FashionAudience } from '@shared/models/general.models';

// Select products by gender target
export const selectProductsByGender = (gender: FashionAudience) =>
  createSelector(
    selectAllProducts,
    (products) => products.filter(product => product.category.includes(gender))
  );

// Select products by tag
export const selectProductsByTag = (tag: string) =>
  createSelector(
    selectAllProducts,
    (products) => products.filter(product => product.tags?.includes(tag))
  );


// Select available products (in stock)
export const selectAvailableProducts = createSelector(
  selectAllProducts,
  (products) => products.filter(product => product.stock>0)
);

// Select products with discount
export const selectDiscountedProducts = createSelector(
  selectAllProducts,
  (products) => products.filter(product => product.discountPercentage && product.discountPercentage > 0)
);
