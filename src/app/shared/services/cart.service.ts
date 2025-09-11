import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICart, ICartItem } from '../models/cart.models';
import { IFashionProduct, IProduct } from '../models/general.models';
import { ApiService } from './api.service';

export interface CartDiscountResponse {
    discountAmount: number;
}

export interface CartCheckoutResponse {
    orderId: string;
}

export interface PaymentDetails {
    method: 'card' | 'upi' | 'netbanking' | 'cod';
    cardNumber?: string;
    upiId?: string;
    bankName?: string;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private apiService = inject(ApiService);
    private defaultMockCart: ICart = {
        items: [
        ],
        totalPrice: 0,
        discount: 0,
        totalItems: 0,
        totalShipping: 0,
        totalTax: 0,
        subTotal: 0
    }
    private mockItems: ICart = { ...this.defaultMockCart };


    getCartProducts(): Observable<ICart> {
        return of(this.mockItems);
    }

    addToCart(productId: number, product: IProduct, quantity: number = 1): Observable<ICart> {
        const existingItemIndex = this.mockItems.items.findIndex(item => item.productId === productId);
        if (existingItemIndex > -1) {
            // Update quantity if product exists
            this.mockItems.items[existingItemIndex].quantity += quantity;
        } else {
            // Add new item if product doesn't exist
            this.mockItems = {
                ...this.mockItems, items: [...this.mockItems.items, {
                    productId,
                    product,
                    quantity
                }]
            }; // Trigger change detection
        }

        // Update cart totals
        this.mockItems.totalItems = this.mockItems.items.reduce((total, item) => total + item.quantity, 0);
        this.mockItems.totalPrice = this.mockItems.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        return of(this.mockItems);
        //return this.apiService.addToCart(productId, product, quantity);
    }

    removeFromCart(productId: number): Observable<ICart> {
        this.mockItems = {
            ...this.mockItems, items: [... this.mockItems.items.filter(item => item.productId !== productId)]
        };
        // Update cart totals
        this.mockItems.totalItems = this.mockItems.items.reduce((total, item) => total + item.quantity, 0);
        this.mockItems.totalPrice = this.mockItems.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        return of(this.mockItems);
        //return this.apiService.removeFromCart(productId);
    }

    updateQuantity(productId: number, quantity: number): Observable<ICart> {
        const itemIndex = this.mockItems.items.findIndex(item => item.productId === productId);

        if (itemIndex > -1) {
            this.mockItems.items[itemIndex].quantity = quantity;
            this.mockItems.totalItems = this.mockItems.items.reduce((total, item) => total + item.quantity, 0);
            this.mockItems.totalPrice = this.mockItems.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        }
        return of(this.mockItems);
        //return this.apiService.updateCartQuantity(productId, quantity);
    }

    clearCart(): Observable<ICart> {
        this.mockItems = { ...this.defaultMockCart };
        return of(this.mockItems);
        //return this.apiService.clearCart();
    }

    applyDiscount(discountCode: string): Observable<CartDiscountResponse> {
        return this.apiService.applyDiscount().create({ discountCode });
    }

    checkout(paymentDetails: PaymentDetails): Observable<CartCheckoutResponse> {
        return this.apiService.checkout().create({ paymentDetails });
    }
}
