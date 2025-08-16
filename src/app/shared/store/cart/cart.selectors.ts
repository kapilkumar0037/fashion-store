import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartProducts = createSelector(
    selectCartState,
    (state) => state.items
);

export const selectCartStatus = createSelector(
    selectCartState,
    (state) => state.status
);

export const selectCartError = createSelector(
    selectCartState,
    (state) => state.error
);

export const selectIsCartOpen = createSelector(
    selectCartState,
    (state) => state.isCartOpen
);

export const selectCartItemsCount = createSelector(
    selectCartState,
    (state) => state.totalItems
);

export const selectCartTotal = createSelector(
    selectCartState,
    (state) => state.totalPrice
);
