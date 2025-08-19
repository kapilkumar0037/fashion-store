import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart, ICartItem } from '../models/cart.models';
import { IFashionProduct } from '../models/general.models';
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

    getCartProducts(): Observable<ICart> {
        return this.apiService.getCartItems<ICart>().getAll();
    }

    addToCart(productId: string, product: IFashionProduct, quantity: number = 1): Observable<ICart> {
        return this.apiService.addToCart().create({productId, product, quantity});
    }

    removeFromCart(productId: string): Observable<ICart> {
        return this.apiService.removeFromCart().delete(productId);
    }

    updateQuantity(productId: string, quantity: number): Observable<ICart> {
        return this.apiService.updateCartQuantity().create({ productId, quantity });
    }

    clearCart(): Observable<ICart> {
        return this.apiService.clearCart().getAll();
    }

    applyDiscount(discountCode: string): Observable<CartDiscountResponse> {
        return this.apiService.applyDiscount().create({ discountCode });
    }

    checkout(paymentDetails: PaymentDetails): Observable<CartCheckoutResponse> {
        return this.apiService.checkout().create({paymentDetails});
    }
}
