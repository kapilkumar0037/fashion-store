import { createAction, props } from "@ngrx/store";
import { CartUpdate, ICart, ICartItem } from "@shared/models/cart.models";

export const loadCart = createAction(
    '[Cart] Load Cart'
);
export const loadCartSuccess = createAction(
    '[Cart] Load Cart Success',
    props<{ cart: ICart }>()
);
export const loadCartFailure = createAction(
    '[Cart] Load Cart Failure',
    props<{ error: string }>()
);
export const addToCart = createAction(
    '[Cart] Add To Cart',
    props<ICartItem>()
);
export const addToCartSuccess = createAction(
    '[Cart] Add To Cart Success',
    props<{ cart: ICart }>()
);
export const addToCartFailure = createAction(
    '[Cart] Add To Cart Failure',
    props<{ error: string }>()
);
export const removeFromCart = createAction(
    '[Cart] Remove From Cart',
    props<{ productId: number }>()
);
export const removeFromCartSuccess = createAction(
    '[Cart] Remove From Cart Success',
    props<{ cart: ICart }>()
);
export const removeFromCartFailure = createAction(
    '[Cart] Remove From Cart Failure',
    props<{ error: string }>()
);
export const clearCart = createAction(
    '[Cart] Clear Cart'
);
export const clearCartSuccess = createAction(
    '[Cart] Clear Cart Success',
    props<{ cart: ICart }>()
);
export const clearCartFailure = createAction(
    '[Cart] Clear Cart Failure',
    props<{ error: string }>()
);
export const updateCartItem = createAction(
    '[Cart] Update Cart Item',
    props<CartUpdate>()
);
export const updateCartItemSuccess = createAction(
    '[Cart] Update Cart Item Success',
    props<{ cart: ICart }>()
);
export const updateCartItemFailure = createAction(
    '[Cart] Update Cart Item Failure',
    props<{ error: string }>()
);

export const applyDiscount = createAction(
    '[Cart] Apply Discount',
    props<{ discountCode: string }>()
);
export const applyDiscountSuccess = createAction(
    '[Cart] Apply Discount Success',
    props<{ cart: ICart }>()
);
export const applyDiscountFailure = createAction(
    '[Cart] Apply Discount Failure',
    props<{ error: string }>()
);

export const checkout = createAction(
    '[Cart] Checkout',
    props<{ paymentDetails: any }>()
);
export const checkoutSuccess = createAction(
    '[Cart] Checkout Success',
    props<{ orderId: string; cart: ICart }>()
);
export const checkoutFailure = createAction(
    '[Cart] Checkout Failure',
    props<{ error: string }>()
);
