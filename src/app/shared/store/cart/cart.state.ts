import { ICart } from '@shared/models/cart.models';

export interface CartState extends ICart {
    status: 'pending' | 'loading' | 'error' | 'success';
    error: string | null;
    isCartOpen: boolean;
    orderId?: string;
}

export const initialCartState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    status: 'pending',
    error: null,
    isCartOpen: false
};
