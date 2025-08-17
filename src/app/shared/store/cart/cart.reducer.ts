import { createReducer, on } from '@ngrx/store';
import { initialCartState } from './cart.state';
import * as CartActions from './cart.actions';

export const cartReducer = createReducer(
    initialCartState,

    // Load Cart
    on(CartActions.loadCart, (state) => ({
        ...state,
        status: 'loading' as const
    })),
    on(CartActions.loadCartSuccess, (state, { cart }) => ({
        ...state,
        ...cart,
        error: null,
        status: 'success' as const
    })),
    on(CartActions.loadCartFailure, (state, { error }) => ({
        ...state,
        error,
        status: 'error' as const
    })),

    // Add to Cart
    on(CartActions.addToCart, (state) => ({
        ...state,
        status: 'loading' as const
    })),
    on(CartActions.addToCartSuccess, (state, { cart }) => ({
        ...state,
        ...cart,
        error: null,
        status: 'success' as const
    })),
    on(CartActions.addToCartFailure, (state, { error }) => ({
        ...state,
        error,
        status: 'error' as const
    })),

    // Remove from Cart
    on(CartActions.removeFromCart, (state) => ({
        ...state,
        status: 'loading' as const
    })),
    on(CartActions.removeFromCartSuccess, (state, { cart }) => ({
        ...state,
        ...cart,
        error: null,
        status: 'success' as const
    })),
    on(CartActions.removeFromCartFailure, (state, { error }) => ({
        ...state,
        error,
        status: 'error' as const
    })),

    // Clear Cart
    on(CartActions.clearCart, (state) => ({
        ...state,
        status: 'loading' as const
    })),
    on(CartActions.clearCartSuccess, (state, { cart }) => ({
        ...state,
        ...cart,
        error: null,
        status: 'success' as const
    })),
    on(CartActions.clearCartFailure, (state, { error }) => ({
        ...state,
        error,
        status: 'error' as const
    })),

    // Update Cart Product Quantity
    on(CartActions.updateCartItem, (state) => ({
        ...state,
        status: 'loading' as const
    })),
    on(CartActions.updateCartItemSuccess, (state, { cart }) => ({
        ...state,
        ...cart,
        error: null,
        status: 'success' as const
    })),
    on(CartActions.updateCartItemFailure, (state, { error }) => ({
        ...state,
        error,
        status: 'error' as const
    }))
);
