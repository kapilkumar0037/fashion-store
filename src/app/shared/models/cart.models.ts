import { IFashionProduct } from './general.models';

export interface ICartItem {
    productId: string;
    quantity: number;
    variantId?: string;
    product: IFashionProduct; // Will be populated when cart is retrieved
}

export interface CartUpdate {
    productId: string;
    quantity: number;
    variantId?: string;
}

export interface ICart {
    items: ICartItem[];
    totalItems: number;
    totalPrice: number;
    discount?: number;
    discountCode?: string;
    subTotal?: number;
    totalTax?: number;
    totalShipping?: number;

}
