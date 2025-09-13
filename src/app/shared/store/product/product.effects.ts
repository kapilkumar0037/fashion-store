import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '@shared/services/product.service';
import * as ProductActions from './product.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  // Load Products Effect
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(({searchTerm}) => this.productService.getAllProducts(searchTerm)
        .pipe(
          map(products => ProductActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductActions.loadProductsFailure({ error: error.message })))
        ))
    );
  });

  // Get Featured Products Effect
  getFeaturedProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getFeaturedProducts),
      mergeMap(({ audience: audience }) => this.productService.getFeaturedProducts(audience)
        .pipe(
          map(products => ProductActions.getFeaturedProductsSuccess({ products })),
          catchError(error => of(ProductActions.getFeaturedProductsFailure({ error: error.message })))
        ))
    );
  });

  // Get Trending Products Effect
  getTrendingProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getTrendingProducts),
      mergeMap(() => this.productService.getTrendingProducts()
        .pipe(
          map(products => ProductActions.getTrendingProductsSuccess({ products })),
          catchError(error => of(ProductActions.getTrendingProductsFailure({ error: error.message })))
        ))
    );
  });

    getProductCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getProductCategories),
      mergeMap(() => this.productService.getProductCategories()
        .pipe(
          map(categories => ProductActions.getProductCategoriesSuccess({ categories })),
          catchError(error => of(ProductActions.getProductCategoriesFailure({ error: error.message })))
        ))
    );
  });

    // Get Products by category Effect
  getProductsByCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getProductByCategories),
      mergeMap(({category}) => this.productService.getProductsByCategory(category)
        .pipe(
          map(products => ProductActions.getProductByCategoriesSuccess({ products })),
          catchError(error => of(ProductActions.getProductByCategoriesFailure({ error: error.message })))
        ))
    );
  });
}
