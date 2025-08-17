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
export const selectCartSubTotal = createSelector(
    selectCartState,
    (state) => state.subTotal
);
export const selectCartTotalDiscount = createSelector(
    selectCartState,
    (state) => state.discount
);
export const selectCartTotalTax = createSelector(
    selectCartState,
    (state) => state.totalTax
);
export const selectCartTotalShipping = createSelector(
    selectCartState,
    (state) => state.totalShipping
);
export const selectCartDiscountCode = createSelector(
    selectCartState,
    (state) => state.discountCode
);

