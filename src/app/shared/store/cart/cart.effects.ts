import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CartService } from '@shared/services/cart.service';
import * as CartActions from './cart.actions';

@Injectable()
export class CartEffects {
    private actions$ = inject(Actions);
    private cartService = inject(CartService);

    loadCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.loadCart),
            mergeMap(() => this.cartService.getCartProducts()
                .pipe(
                    map(cart => CartActions.loadCartSuccess({ cart })),
                    catchError(error => of(CartActions.loadCartFailure({ error: error.message })))
                ))
        )
    );

    addToCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.addToCart),
            mergeMap((action) => this.cartService.addToCart(action.productId, action.quantity)
                .pipe(
                    map(cart => CartActions.addToCartSuccess({ cart })),
                    catchError(error => of(CartActions.addToCartFailure({ error: error.message })))
                ))
        )
    );

    removeFromCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.removeFromCart),
            mergeMap(({ productId }) => this.cartService.removeFromCart(productId)
                .pipe(
                    map(cart => CartActions.removeFromCartSuccess({ cart })),
                    catchError(error => of(CartActions.removeFromCartFailure({ error: error.message })))
                ))
        )
    );

    clearCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.clearCart),
            mergeMap(() => this.cartService.clearCart()
                .pipe(
                    map(cart => CartActions.clearCartSuccess({ cart })),
                    catchError(error => of(CartActions.clearCartFailure({ error: error.message })))
                ))
        )
    );

    updateCartItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.updateCartItem),
            mergeMap((action) => this.cartService.updateQuantity(action.productId, action.quantity)
                .pipe(
                    map(cart => CartActions.updateCartItemSuccess({ cart })),
                    catchError(error => of(CartActions.updateCartItemFailure({ error: error.message })))
                ))
        )
    );

    applyDiscount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.applyDiscount),
            mergeMap(({ discountCode }) => this.cartService.applyDiscount(discountCode)
                .pipe(
                    mergeMap(() => this.cartService.getCartProducts()),
                    map(cart => CartActions.applyDiscountSuccess({ cart })),
                    catchError(error => of(CartActions.applyDiscountFailure({ error: error.message })))
                ))
        )
    );

    checkout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.checkout),
            mergeMap(({ paymentDetails }) => this.cartService.checkout(paymentDetails)
                .pipe(
                    mergeMap(response => this.cartService.getCartProducts()
                        .pipe(
                            map(cart => CartActions.checkoutSuccess({ cart, orderId: response.orderId }))
                        )
                    ),
                    catchError(error => of(CartActions.checkoutFailure({ error: error.message })))
                ))
        )
    );
}
