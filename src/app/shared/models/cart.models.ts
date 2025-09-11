import { IFashionProduct, IProduct } from './general.models';

export interface ICartItem {
    productId: number;
    quantity: number;
    variantId?: string;
    product: IProduct; // Will be populated when cart is retrieved
}

export interface CartUpdate {
    productId: number;
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
